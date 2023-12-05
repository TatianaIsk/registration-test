'use client';
import { useState, useEffect } from 'react';
import { validation } from './helpers/validation';

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
    setState(prev => ({ ...prev, selectCities: value }));
  };

  useEffect(() => {
    const savedLastModified = localStorage.getItem('lastModified');
    if (savedLastModified) {
      setLastModified(new Date(savedLastModified));
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    validation(state, setState);
    e.preventDefault();
    collectFormData();
    setLastModified(new Date());
  };

  useEffect(() => {
    if (lastModified) {
      localStorage.setItem('lastModified', lastModified.toISOString());
    }
  }, [lastModified]);

  const collectFormData = () => {
    const formData = {
      firstName: state.firstName,
      lastName: state.lastName,
      selectCities: state.selectCities,
      password: state.password,
      confirmPassword: state.confirmPassword,
      phone: state.phone,
      email: state.email,
      checkbox: state.checkbox,
    };

    console.log(JSON.stringify(formData));
  };

  return (
    <form className={s.container} onSubmit={onSubmit}>
      <Title name='Человек' />
      <div className={s.mainBlock}>
        <Input
          classNames={{ input: state.errorFirstName && s.inputError }}
          label='Имя'
          required
          placeholder='Введите имя'
          name='firstName'
          htmlFor='name'
          value={state.firstName}
          onChange={onHandleChange}
        />
        {state.errorFirstName && <p className='text-red-500 mt-2 text-xs absolute top-[200px] left-[330px]'>{state.errorFirstName}</p>}
        <Input
          classNames={{ input: state.errorLastName && s.inputError }}
          label='Фамилия'
          required
          placeholder='Введите фамилию'
          name='lastName'
          htmlFor='lastName'
          value={state.lastName}
          onChange={onHandleChange}
        />
        {state.errorLastName && <p className='text-red-500 mt-2 text-xs absolute top-[275px] left-[330px]'>{state.errorLastName}</p>}
        <Select
          classNames={{ select: state.errorSelect && s.inputError }}
          options={cities}
          labelSelect='Ваш город'
          required
          htmlFor='cities'
          value={state.selectCities}
          onChange={onSelectCityChange}
        />
        {state.errorSelect && <p className='text-red-500 mt-2 text-xs absolute top-[350px] left-[330px]'>{state.errorSelect}</p>}
      </div>
      <div className={s.passwordBlock}>
        <Input
          classNames={{ input: state.errorPassword && s.inputError }}
          label='Пароль'
          placeholder='Введите пароль'
          name='password'
          htmlFor='password'
          type='password'
          value={state.password}
          onChange={onHandleChange}
        />
        {state.errorPassword && <p className='text-red-500 mt-2 text-xs absolute top-[460px] left-[330px]'>{state.errorPassword}</p>}
        <Input
          classNames={{ input: state.errorConfirm && s.inputError }}
          label='Пароль еще раз'
          placeholder='Повторите пароль'
          name='confirmPassword'
          htmlFor='confirmPassword'
          type='password'
          value={state.confirmPassword}
          onChange={onHandleChange}
        />
        {state.errorConfirm && <p className='text-red-500 mt-2 text-xs absolute top-[535px] left-[330px]'>{state.errorConfirm}</p>}
      </div>
      <div className={s.emailBlock}>
        <InputPhone label='Номер телефона' value={state.phone} onChange={onHandleChange} />
        <Input
          classNames={{ input: state.errorEmail && s.inputError }}
          label='Электронная почта'
          placeholder='Введите электронную почту'
          name='email'
          htmlFor='email'
          value={state.email}
          onChange={onHandleChange}
        />
        {state.errorEmail && <p className='text-red-500 mt-2 text-xs absolute top-[720px] left-[330px] xl:left-[345px] md:left-[331px]'>{state.errorEmail}</p>}
        <Checkbox label='Я согласен' value={state.checkbox.toString()} onChange={onHandleChange} />
        <p className={s.textCheckbox}>принимать актуальную информацию на емейл</p>
      </div>
      <div className={s.submitForm}>
        <Button className={s.button} type='submit'>
          Изменить
        </Button>
        {!!lastModified && <p className={s.text}>последние изменения {lastModified.toLocaleString()}</p>}
      </div>
    </form>
  );
};

export default MainPage;
