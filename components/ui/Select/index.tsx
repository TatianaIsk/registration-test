'use client';

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
  className?: string;
}

const Select: React.FC<SelectProps> = ({ options, className }) => {
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

  return (
    <select className={clsx(s.select, className)}>
      {sortedOptions.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
