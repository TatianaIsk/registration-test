import { ZodType, z } from 'zod';
import { MainPageState } from '../utils/MainPageState';

export type ResetPassword = {
  password: string;
  confirmPassword: string;
};

export const resetPasswordSchema: ZodType<ResetPassword> = z
  .object({
    password: z.string().refine(value => value !== '', {
      message: 'Это поле должно быть заполнено',
    }),
    confirmPassword: z.string().refine(value => value !== '', {
      message: 'Это поле должно быть заполнено',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  });

export const validationSchema: ZodType<MainPageState> = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'Используйте не менее 2 символов' })
      .regex(/^[а-яА-ЯёЁ]+$/, { message: 'Должна использоваться кириллица' })
      .min(1, 'Это поле должно быть заполнено'),
    lastName: z
      .string()
      .min(2, { message: 'Используйте не менее 2 символов' })
      .regex(/^[а-яА-ЯёЁ]+$/, { message: 'Должна использоваться кириллица' })
      .min(1, 'Это поле должно быть заполнено'),
    selectCities: z.string().min(1, 'Это поле должно быть заполнено'),
    phone: z
      .string()
      .regex(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]+$/, { message: 'Введите корректные данные' })
      .optional(),
    checkbox: z.boolean(),
    email: z.string().email(),
  })
  .and(resetPasswordSchema);
