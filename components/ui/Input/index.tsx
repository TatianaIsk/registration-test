import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {}

const Input: React.FC<InputProps> = ({ className, disabled, ...props }) => <input className={clsx(s.input, className)} disabled={disabled} {...props} />;

export default Input;
