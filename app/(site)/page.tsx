'use client';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './helpers/validation';

import cities from '@/json/cities.json';

import MainPageState from './utils/MainPageState';
import initialState from './utils/initialState';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';
import Select from '@/components/ui/Select';
import InputPhone from '@/components/ui/Input/InputPhone';
import Checkbox from '@/components/ui/Input/Checkbox';
import Error from '@/components/ui/Error';

import s from './MainPage.module.scss';

const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MainPageState>({
    defaultValues: initialState,
    resolver: yupResolver(validationSchema),
  });
  const [lastModified, setLastModified] = useState<Date | null>(null);

  useEffect(() => {
    const savedLastModified = localStorage.getItem('lastModified');
    if (savedLastModified) {
      setLastModified(new Date(savedLastModified));
    }
  }, []);

  useEffect(() => {
    if (lastModified) {
      localStorage.setItem('lastModified', lastModified.toISOString());
    }
  }, [lastModified]);

  const onSubmit = handleSubmit((data: MainPageState) => {
    collectFormData(data);
    setLastModified(new Date());
  });

  const collectFormData = (data: MainPageState) => {
    const { firstName, lastName, selectCities, password, confirmPassword, phone, email, checkbox } = data;

    const formData = { firstName, lastName, selectCities, password, confirmPassword, phone, email, checkbox };

    console.log(JSON.stringify(formData));
  };

  return (
    <form className={s.container} onSubmit={onSubmit}>
      <Title name='Человек' />
      <div className={s.mainBlock}>
        <Input {...register('firstName')} classNames={{ input: errors.firstName && s.inputError }} label='Имя' required placeholder='Введите имя' htmlFor='firstName' />
        {errors.firstName && <Error className={s.error}>{errors.firstName.message}</Error>}
        <Input {...register('lastName')} classNames={{ input: errors.lastName && s.inputError }} label='Фамилия' required placeholder='Введите фамилию' htmlFor='lastName' />
        {errors.lastName && <Error>{errors.lastName.message}</Error>}
        <Select {...register('cities')} classNames={{ select: errors.selectCities && s.inputError }} options={cities} label='Ваш город' required htmlFor='cities' />
        {errors.selectCities && <Error>{errors.selectCities.message}</Error>}
      </div>
      <div className={s.passwordBlock}>
        <Input {...register('password')} classNames={{ input: errors.password && s.inputError }} label='Пароль' placeholder='Введите пароль' htmlFor='password' type='password' />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Input
          {...register('confirmPassword')}
          classNames={{ input: errors.confirmPassword && s.inputError }}
          label='Пароль еще раз'
          placeholder='Повторите пароль'
          htmlFor='confirmPassword'
          type='password'
        />
        {errors.confirmPassword && <Error>{errors.confirmPassword.message}</Error>}
      </div>
      <div className={s.emailBlock}>
        <InputPhone {...register('phone')} classNames={{ input: errors.phone && s.inputError }} label='Номер телефона' />
        {errors.phone && <Error>{errors.phone.message}</Error>}
        <Input {...register('email')} classNames={{ input: errors.email && s.inputError }} label='Электронная почта' placeholder='Введите электронную почту' htmlFor='email' />
        {errors.email && <Error>{errors.email.message}</Error>}
        <div className={s.checkbox}>
          <p className={s.textCheckbox}>Я согласен</p>
          <Checkbox {...register('checkbox')} label='принимать актуальную информацию на емейл' />
        </div>
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
