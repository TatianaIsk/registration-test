import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import Label from '../Label';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  required?: boolean;
  htmlFor?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
}

const Input: React.FC<InputProps> = ({ classNames, disabled, label, required, htmlFor, ...props }) => (
  <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
    {label && <Label label={label} htmlFor={htmlFor} required={required} />}
    <input id={htmlFor} className={clsx(s.input, classNames?.input)} disabled={disabled} {...props} />
  </div>
);

export default Input;
