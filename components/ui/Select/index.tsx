import { useSortedOptions } from '@/hooks/useSortedOptions';
import { RawOption } from '@/types/RawOption';

import Label from '../Label';

import clsx from 'clsx';

import s from './Select.module.scss';
import Error from '../Error';

interface SelectProps {
  options: RawOption[];
  onChange?: (value: string) => void;
  value?: string;
  name?: string;
  label?: string;
  htmlFor?: string;
  required?: boolean;
  classNames?: {
    selectBlock?: string;
    select?: string;
  };
  error?: string;
}

const Select: React.FC<SelectProps> = ({ options, classNames, onChange, value, name, label, htmlFor, required, error }) => {
  const { sortedOptions, largestCity } = useSortedOptions(options);

  return (
    <div className={clsx(s.selectBlock, classNames?.selectBlock)}>
      {label && <Label label={label} htmlFor={htmlFor} required={required} />}
      <div className={s.errorBlock}>
        <select id={htmlFor} className={clsx(s.select, classNames?.select)} value={value} name={name}>
          <option className={s.option}>Выберите город</option>
          {largestCity && (
            <option key={largestCity.population} value={largestCity.population}>
              {largestCity.label}
            </option>
          )}
          {sortedOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {error && <Error>{error}</Error>}
      </div>
    </div>
  );
};

export default Select;
