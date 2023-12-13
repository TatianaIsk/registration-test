import { PropsWithChildren } from 'react';

import s from './Error.module.scss'

interface ErrorProps extends PropsWithChildren {}

const Error: React.FC<ErrorProps> = ({ children }) => <p className={s.error}>{children}</p>;

export default Error;
