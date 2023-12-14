import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import Label from '../Label';

import s from './Input.module.scss';
import Error from '../Error';
import error from 'next/error';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  required?: boolean;
  htmlFor?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
  error?: string;
}

const Input: React.FC<InputProps> = ({ classNames, disabled, label, required, htmlFor, ...props }) => (
  <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
    {label && <Label label={label} htmlFor={htmlFor} required={required} />}
    <input id={htmlFor} className={clsx(s.input, classNames?.input)} disabled={disabled} {...props} />
    {error && <Error>{error}</Error>}
  </div>
);

export default Input;
