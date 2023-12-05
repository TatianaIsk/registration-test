'use client';
import { useState } from 'react';
import { validateField } from './utils/validation';

import cities from '@/json/cities.json';

import MainPageState from './utils/MainPageState';
import initialState from './utils/initialState';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';
import Select from '@/components/ui/Select';
import InputPhone from '@/components/ui/Input/InputPhone';
import Checkbox from '@/components/ui/Input/Checkbox';

import s from './MainPage.module.scss';

const MainPage = () => {
  const [lastModified, setLastModified] = useState<Date | null>(null);

  const [state, setState] = useState<MainPageState>(initialState);

  const onHandleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onSelectCityChange = (value: string) => {
    setState(prev => ({ ...prev, selectCity: value }));
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(state).forEach(key => {
      const field = state[key];
      const validationResult = validateField({ name: key, value: field, formValues: state });

      if (!validationResult.valid) {
        isValid = false;
        setState(prev => ({
          ...prev,
          valid: false,
          errorMessage: validationResult.errorMessage,
        }));
      }
    });

    return isValid;
  };

  return (
    <div className={s.container}>
      <Title name='Человек' />
      <div className={s.mainBlock}>
        <Input label='Имя' required placeholder='Введите имя' name='firstName' htmlFor='name' value={state.firstName} onChange={onHandleChange} />
        <Input label='Фамилия' required placeholder='Введите фамилию' name='lastName' htmlFor='lastName' value={state.lastName} onChange={onHandleChange} />
        <Select options={cities} labelSelect='Ваш город' required htmlFor='cities' value={state.selectCities} onChange={onSelectCityChange} />
      </div>
      <div className={s.passwordBlock}>
        <Input label='Пароль' placeholder='Введите пароль' name='password' htmlFor='password' type='password' value={state.password} onChange={onHandleChange} />
        <Input label='Пароль еще раз' placeholder='Повторите пароль' name='confirmPassword' htmlFor='confirmPassword' type='password' value={state.confirmPassword} onChange={onHandleChange} />
      </div>
      <div className={s.emailBlock}>
        <InputPhone label='Номер телефона' value={state.phone} onChange={onHandleChange} />
        <Input label='Электронная почта' placeholder='Введите электронную почту' name='email' htmlFor='email' value={state.email} onChange={onHandleChange} />
        <Checkbox label='Я согласен' value={state.checkbox.toString()} onChange={onHandleChange} />
        <p className={s.textCheckbox}>принимать актуальную информацию на емейл</p>
      </div>
      <div className={s.submitForm}>
        <Button
          className={s.button}
          type='submit'
          onClick={() => {
            if (validateForm()) {
              setLastModified(new Date());
            }
          }}
        >
          Изменить
        </Button>
        {!!lastModified && <p className={s.text}>последние изменения {lastModified.toLocaleString()}</p>}
      </div>
    </div>
  );
};

export default MainPage;
