import { PropsWithChildren, ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import s from './Button.module.scss';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => (
  <button className={clsx(s.button, className)} {...props}>
    {children}
  </button>
);

export default Button;
