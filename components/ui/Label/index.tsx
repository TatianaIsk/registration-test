import clsx from 'clsx';

import s from './Label.module.scss';

interface LabelProps {
  label?: string;
  required?: boolean;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ label, required, htmlFor, className }) => (
  <label className={clsx(s.label, className)} htmlFor={htmlFor}>
    {label}
    {required && <span className={s.labelReq}>*</span>}
  </label>
);

export default Label;
