import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import s from './Checkbox.module.scss';
import Label from '../../Label';
import Error from '../../Error';

interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'value'> {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  classNames?: {
    checkboxBlock?: string;
    checkbox?: string;
    checkmark?: string;
  };
  value?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ classNames, label, required, value, htmlFor, ...props }) => (
  <div className={clsx(s.checkboxBlock, classNames?.checkboxBlock)}>
    <label className={s.checkboxLabel}>
      <input type='checkbox' className={s.checkbox} {...props} checked={value} id={htmlFor} />
      <span className={clsx(s.checkmark, classNames?.checkmark)}></span>
      {label && <Label label={label} htmlFor={htmlFor} required={required} className={s.label} />}
    </label>
  </div>
);

export default Checkbox;
