'use client';
import { useState } from 'react';

import cities from '@/json/cities.json';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';
import Select from '@/components/ui/Select';

import s from './MainPage.module.scss';
import InputPhone from '@/components/ui/Input/InputPhone';
import Checkbox from '@/components/ui/Input/Checkbox';

const MainPage = () => {
  const [lastModified, setLastModified] = useState<Date | null>(null);

  return (
    <div className={s.container}>
      <Title name='Человек' />
      <div className={s.mainBlock}>
        <Input label='Имя' required placeholder='Введите имя' name='firstName' htmlFor='name' />
        <Input label='Фамилия' required placeholder='Введите фамилию' name='lastName' htmlFor='lastName' />
        <Select options={cities} labelSelect='Ваш город' required htmlFor='cities' />
      </div>
      <div className={s.passwordBlock}>
        <Input label='Пароль' placeholder='Введите пароль' name='password' htmlFor='password' type='password' />
        <Input label='Пароль еще раз' placeholder='Повторите пароль' name='confirmPassword' htmlFor='confirmPassword' type='password' />
      </div>
      <div className={s.emailBlock}>
        <InputPhone label='Номер телефона' />
        <Input label='Электронная почта' placeholder='Введите электронную почту' name='email' htmlFor='email' />
        <Checkbox label='Я согласен' />
        <p className={s.textCheckbox}>принимать актуальную информацию на емейл</p>
      </div>
      <div className={s.submitForm}>
        <Button className={s.button} type='submit' onClick={() => setLastModified(new Date())}>
          Изменить
        </Button>
        {!!lastModified && <p className={s.text}>последние изменения {lastModified.toLocaleString()}</p>}
      </div>
    </div>
  );
};

export default MainPage;
