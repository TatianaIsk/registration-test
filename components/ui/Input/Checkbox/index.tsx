import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';
import s from './Checkbox.module.scss';
import Label from '../../Label';
import { useFormContext } from 'react-hook-form';

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
  name: string;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ classNames, label, required, value, htmlFor, disabled, name, ...props }) => {
  const { register } = useFormContext();

  return (
    <div className={clsx(s.checkboxBlock, classNames?.checkboxBlock)}>
      <label className={s.checkboxLabel}>
        <input type='checkbox' className={s.checkbox} {...props} checked={value} id={htmlFor} {...register(name, { disabled })} />
        <span className={clsx(s.checkmark, classNames?.checkmark)}></span>
        {label && <Label label={label} htmlFor={htmlFor} required={required} className={s.label} />}
      </label>
    </div>
  );
};

export default Checkbox;
