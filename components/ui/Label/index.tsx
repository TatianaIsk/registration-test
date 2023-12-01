import { PropsWithChildren } from 'react';

import s from './Label.module.scss';

interface LabelProps extends PropsWithChildren {
  htmlFor?: string;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({ htmlFor, required, children }) => {
  return (
    <label htmlFor={htmlFor} className={s.label}>
      {children}
      {required && (
        <span style={{ color: 'red' }} className={s.labelReq}>
          *
        </span>
      )}
    </label>
  );
};

export default Label;
