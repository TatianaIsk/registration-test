import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  required?: boolean;
  htmlFor?: string;
  classNames?: {
    inputBlock: string;
    input: string;
  };
  error?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ classNames, disabled, label, required, htmlFor, error, errorMessage, ...props }) => (
  <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
    {label && (
      <label className={s.label} htmlFor={htmlFor}>
        {label}
        {required && (
          <span style={{ color: 'red' }} className={s.labelReq}>
            *
          </span>
        )}
      </label>
    )}
    <input id={htmlFor} className={clsx(s.input, classNames?.input, { [s.error]: error })} disabled={disabled} {...props} />
    {error && errorMessage && <p className={s.errorMsg}>{errorMessage}</p>}
  </div>
);

export default Input;
