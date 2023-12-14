import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import Label from '../Label';
import Error from '../Error';

import s from './Input.module.scss';

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

const Input: React.FC<InputProps> = ({ classNames, disabled, label, required, htmlFor, error, ...props }) => (
  <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
    {label && <Label label={label} htmlFor={htmlFor} required={required} />}
    <div className={s.errorBlock}>
      <input id={htmlFor} className={clsx(s.input, classNames?.input)} disabled={disabled} {...props} />
      {error && <Error>{error}</Error>}
    </div>
  </div>
);

export default Input;
