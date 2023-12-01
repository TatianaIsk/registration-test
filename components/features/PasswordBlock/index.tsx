'use client';
import { useState } from 'react';

import Label from '@/components/ui/Label';
import Input from '@/components/ui/Input';

import s from './PasswordBlock.module.scss';

interface PasswordBlockState {
  password: string;
  confirmPassword: string;
  error: string;
}

const PasswordBlock = () => {
  const [state, setState] = useState<PasswordBlockState>({
    password: '',
    confirmPassword: '',
    error: '',
  });

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      confirmPassword: event.target.value,
    }));
  };

  return (
    <form className={s.wrapper}>
      <div className={s.input}>
        <Label>Пароль</Label>
        <Input className={state.error && s.inputError} onChange={handlePasswordChange} placeholder='Введите пароль' type='password' value={state.password} />
      </div>
      <div className={s.input}>
        <Label required>Пароль еще раз</Label>
        <Input className={state.error && s.confirmInputError} onChange={handleConfirmPasswordChange} placeholder='Подтвердите пароль' type='password' value={state.confirmPassword} />
      </div>
    </form>
  );
};

export default PasswordBlock;
