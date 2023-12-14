import { useSortedOptions } from '@/hooks/useSortedOptions';
import { RawOption } from '@/types/RawOption';

import Label from '../Label';

import clsx from 'clsx';

import s from './Select.module.scss';
import Error from '../Error';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface SelectProps {
  options: RawOption[];
  onChange?: (value: string) => void;
  value?: string;
  name: string;
  disabled?: boolean;
  label?: string;
  htmlFor?: string;
  required?: boolean;
  classNames?: {
    selectBlock?: string;
    select?: string;
  };
  error?: string;
}

const Select: React.FC<SelectProps> = ({ options, classNames, name, label, htmlFor, required, disabled }) => {
  const { sortedOptions, largestCity } = useSortedOptions(options);
  const { register } = useFormContext();

  return (
    <div className={clsx(s.selectBlock, classNames?.selectBlock)}>
      {label && <Label label={label} htmlFor={htmlFor} required={required} />}
      <div className={s.errorBlock}>
        <select id={htmlFor} className={clsx(s.select, classNames?.select)} {...register(name, { disabled })}>
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
        <ErrorMessage name={name} render={({ message }) => <Error>{message}</Error>} />
      </div>
    </div>
  );
};

export default Select;
