import { useState, useEffect } from 'react';
import clsx from 'clsx';
import s from './Select.module.scss';

interface Option {
  value: string;
  label: string;
}

interface RawOption {
  city: string;
  population: string;
}

interface SelectProps {
  options: RawOption[];
  onChange?: (value: string) => void;
  value?: string;
  name?: string;
  labelSelect?: string;
  htmlFor?: string;
  required?: boolean;
  classNames?: {
    selectBlock?: string;
    select?: string;
  };
  error?: boolean;
  errorMessage?: string;
}

const Select: React.FC<SelectProps> = ({ options, classNames, onChange, value, name, labelSelect, htmlFor, required, errorMessage, error }) => {
  const [sortedOptions, setSortedOptions] = useState<Option[]>([]);

  useEffect(() => {
    const filteredOptions = options
      .filter(raw => parseInt(raw.population) > 50000)
      .map(raw => ({
        value: raw.city,
        label: raw.city,
        population: parseInt(raw.population),
      }));

    const sortedCities = filteredOptions.sort((a, b) => {
      if (b.population !== a.population) {
        return b.population - a.population;
      }
      return a.label.localeCompare(b.label);
    });

    setSortedOptions(sortedCities);
  }, [options]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={clsx(s.selectBlock, classNames?.selectBlock)}>
      {labelSelect && (
        <label className={s.label} htmlFor={htmlFor}>
          {labelSelect}
          {required && (
            <span style={{ color: 'red' }} className={s.labelReq}>
              *
            </span>
          )}
        </label>
      )}
      <select id={htmlFor} className={clsx(s.select, classNames?.select, { [s.error]: error })} onChange={handleChange} value={value} name={name}>
        {sortedOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
