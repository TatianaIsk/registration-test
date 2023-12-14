import { ComponentPropsWithRef } from 'react';
import MaskedInput from 'react-input-mask';

import clsx from 'clsx';

import Label from '../../Label';

import s from './InputPhone.module.scss';
import Error from '../../Error';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps extends ComponentPropsWithRef<'input'> {
  name: string;
  label?: string;
  required?: boolean;
  htmlFor?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
  disabled?: boolean;
}

const InputPhone: React.FC<InputProps> = ({ classNames, label, required, htmlFor,name, disabled }) => {
  const { register } = useFormContext();

  return (
    <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
      {label && <Label label={label} htmlFor={htmlFor} required={required} />}
      <div className={s.errorBlock}>
        <MaskedInput mask='+7 (999) 999-99-99' alwaysShowMask className={clsx(s.inputPhone, classNames?.input)} id={htmlFor} {...register(name, { disabled })} />
        <ErrorMessage name={name} render={({ message }) => <Error>{message}</Error>} />
      </div>
    </div>
  );
};

export default InputPhone;
