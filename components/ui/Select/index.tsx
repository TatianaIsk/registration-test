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
}

const Select: React.FC<SelectProps> = ({ options, classNames, onChange, value, name, labelSelect, htmlFor, required }) => {
  const [sortedOptions, setSortedOptions] = useState<Option[]>([]);
  const [largestCity, setLargestCity] = useState<Option | null>(null);

  useEffect(() => {
    const filteredOptions = options
      .filter(raw => parseInt(raw.population) > 50000)
      .map(raw => ({
        value: raw.city,
        label: raw.city,
        population: parseInt(raw.population),
      }));

    const largestCity = filteredOptions.reduce((prev, current) => {
      return prev.population > current.population ? prev : current;
    });

    const sortedCities = filteredOptions.filter(option => option !== largestCity).sort((a, b) => a.label.localeCompare(b.label));

    setSortedOptions([largestCity, ...sortedCities]);
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
      <select id={htmlFor} className={clsx(s.select, classNames?.select)} onChange={handleChange} value={value} name={name}>
        <option className={s.option}>Выберите город</option>
        {largestCity && (
          <option key={largestCity.value} value={largestCity.value}>
            {largestCity.label}
          </option>
        )}
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
