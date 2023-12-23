import { Resolver } from 'react-hook-form';
import { z } from 'zod';
import { validationSchema, resetPasswordSchema } from '../helpers/validation';
import { MainPageState } from './MainPageState';

export const resolver: Resolver<MainPageState> = async (values, _, options) => {
  try {
    await validationSchema.parseAsync(values);
    await resetPasswordSchema.parseAsync(values);
    return {
      values,
      errors: {},
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: { [key: string]: string } = {};
      error.errors.forEach(err => {
        if (err.path) {
          const path = err.path.join('.');
          errors[path] = err.message;
        }
      });
      return {
        values,
        errors,
      };
    }
    throw error;
  }
};
