'use client';
import { useState, useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './helpers/validation';

import cities from '@/json/cities.json';

import { MainPageState } from './utils/MainPageState';
import initialState from './utils/initialState';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Title from '@/components/ui/Title';
import Select from '@/components/ui/Select';
import InputPhone from '@/components/ui/Input/InputPhone';
import Checkbox from '@/components/ui/Input/Checkbox';

import s from './MainPage.module.scss';

const MainPage = () => {
  const form = useForm<MainPageState>({
    defaultValues: initialState,
    resolver: yupResolver(validationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

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
    <FormProvider {...form}>
      <form className={s.container} onSubmit={onSubmit}>
        <Title name='Человек' />
        <div className={s.mainBlock}>
          <Input classNames={{ input: errors.firstName && s.inputError }} label='Имя' required placeholder='Введите имя' htmlFor='firstName' error={errors.firstName?.message} name='firstName' />
          <Input classNames={{ input: errors.lastName && s.inputError }} label='Фамилия' required placeholder='Введите фамилию' htmlFor='lastName' name='lastName' />
          <Select classNames={{ select: errors.selectCities && s.inputError }} options={cities} label='Ваш город' required htmlFor='selectCities' name='selectCities' />
        </div>
        <div className={s.passwordBlock}>
          <Input {...register('password')} classNames={{ input: errors.password && s.inputError }} label='Пароль' placeholder='Введите пароль' htmlFor='password' type='password' name='password' />
          <Input
            classNames={{ input: errors.confirmPassword && s.inputError }}
            label='Пароль еще раз'
            placeholder='Повторите пароль'
            htmlFor='confirmPassword'
            type='password'
            name='confirmPassword'
          />
        </div>
        <div className={s.emailBlock}>
          <InputPhone classNames={{ input: errors.phone && s.inputError }} label='Номер телефона' htmlFor='phone' name='phone' />
          <Input classNames={{ input: errors.email && s.inputError }} label='Электронная почта' placeholder='Введите электронную почту' htmlFor='email' name='email' />
          <div className={s.checkbox}>
            <p className={s.textCheckbox}>Я согласен</p>
            <Checkbox label='принимать актуальную информацию на емейл' name='checkbox' />
          </div>
        </div>
        <div className={s.submitForm}>
          <Button className={s.button} type='submit'>
            Изменить
          </Button>
          {!!lastModified && <p className={s.text}>последние изменения {lastModified.toLocaleString()}</p>}
        </div>
      </form>
    </FormProvider>
  );
};

export default MainPage;
