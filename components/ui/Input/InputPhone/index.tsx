import { ComponentPropsWithRef } from 'react';
import MaskedInput from 'react-input-mask';

import clsx from 'clsx';

import Label from '../../Label';

import s from './InputPhone.module.scss';
import Error from '../../Error';

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

const InputPhone: React.FC<InputProps> = ({ classNames, label, required, htmlFor, error }) => (
  <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
    {label && <Label label={label} htmlFor={htmlFor} required={required} />}
    <div className={s.errorBlock}>
      <MaskedInput mask='+7 (999) 999-99-99' alwaysShowMask className={clsx(s.inputPhone, classNames?.input)} id={htmlFor} />
      {error && <Error>{error}</Error>}
    </div>
  </div>
);

export default InputPhone;
