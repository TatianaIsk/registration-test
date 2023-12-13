import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[а-яА-ЯёЁ]$/, 'Должна использоваться кириллица')
    .min(2, 'Используйте не менее 2 символов')
    .required('Это поле должно быть заполнено'),
  lastName: yup
    .string()
    .matches(/^[а-яА-ЯёЁ]{2,}$/, 'Должна использоваться кириллица')
    .required('Это поле должно быть заполнено'),
  selectCities: yup.string().required('Это поле должно быть заполнено'),
  password: yup
    .string()
    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm, 'Пароль не надежен')
    .min(5, 'Используйте не менее 5 символов')
    .required('Укажите пароль'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Это поле должно быть заполнено'),
  phone: yup.string().matches(/^^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7}$/gm, 'Введите корректные данные'),
  checkbox: yup.boolean(),
  email: yup
    .string()
    .when('checkbox', {
      is: true,
      then: schema => schema.required('Email должен быть заполнен'),
    })
    .email('Введите верный email')
    .matches(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gm, 'Введите корректные данные'),
});

