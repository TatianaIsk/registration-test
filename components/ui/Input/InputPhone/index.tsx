import { ComponentPropsWithRef } from 'react';
import MaskedInput from 'react-input-mask';

import clsx from 'clsx';

import s from './InputPhone.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  required?: boolean;
  htmlFor?: string;
  classNames?: {
    inputBlock: string;
    input: string;
  };
}

const InputPhone: React.FC<InputProps> = ({ classNames, disabled, label, required, htmlFor, ...props }) => (
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
    <MaskedInput mask='+7 (999) 999-99-99' alwaysShowMask className={s.inputPhone} id={htmlFor} />
  </div>
);

export default InputPhone;
