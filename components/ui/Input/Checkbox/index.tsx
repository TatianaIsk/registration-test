import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import s from './Checkbox.module.scss';

interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  required?: boolean;
  classNames?: {
    checkboxBlock: string;
    checkbox: string;
    checkmark: string;
  };
}

const Checkbox: React.FC<CheckboxProps> = ({ classNames, label, required, ...props }) => (
  <div className={clsx(s.checkboxBlock, classNames?.checkboxBlock)}>
    <label className={s.checkboxLabel}>
      {label && (
        <span className={s.labelText}>
          {label}
          {required && <span style={{ color: 'red' }}>*</span>}
        </span>
      )}
      <input type='checkbox' className={s.checkbox} />
      <span className={clsx(s.checkmark, classNames?.checkmark)}></span>
    </label>
  </div>
);

export default Checkbox;
