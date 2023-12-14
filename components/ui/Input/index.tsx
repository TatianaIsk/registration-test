import { ComponentPropsWithRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import clsx from 'clsx';

import Label from '../Label';
import Error from '../Error';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  name: string;
  label?: string;
  required?: boolean;
  htmlFor?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
  error?: string;
}

const Input: React.FC<InputProps> = ({ classNames, disabled, label, required, htmlFor, name, ...props }) => {
  const { register } = useFormContext();

  return (
    <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
      {label && <Label label={label} htmlFor={htmlFor} required={required} />}
      <div className={s.errorBlock}>
        <input id={htmlFor} className={clsx(s.input, classNames?.input)} disabled={disabled} {...props} {...register(name, { disabled })} />
        <ErrorMessage name={name} render={({ message }) => <Error>{message}</Error>} />
      </div>
    </div>
  );
};

export default Input;
