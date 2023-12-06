import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import s from './Checkbox.module.scss';

interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'value'> {
  label?: string;
  required?: boolean;
  classNames?: {
    checkboxBlock?: string;
    checkbox?: string;
    checkmark?: string;
  };
  value?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ classNames, label, required, value, ...props }) => (
  <div className={clsx(s.checkboxBlock, classNames?.checkboxBlock)}>
    <label className={s.checkboxLabel}>
      {label && (
        <span className={s.labelText}>
          {label}
          {required && <span style={{ color: 'red' }}>*</span>}
        </span>
      )}
      <input type='checkbox' className={s.checkbox} {...props} checked={value} />
      <span className={clsx(s.checkmark, classNames?.checkmark)}></span>
    </label>
  </div>
);

export default Checkbox;
