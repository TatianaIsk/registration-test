import clsx from 'clsx';

import s from './Title.module.scss';

interface TitleProps {
  name: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ name, className }) => (
  <h1 className={clsx(s.title, className)}>
    <span>Здравствуйте, </span>
    <span className={s.titleName}>{name}</span>
  </h1>
);

export default Title;
