import { useMemo } from 'react';
import { RawOption } from '@/types/RawOption';

export const useSortedOptions = (options: RawOption[]) => {
  const sortedOptions = useMemo(() => {
    const filteredOptions = options.filter(raw => parseInt(raw.population) > 50000);

    const sortedCities = filteredOptions.sort((a, b) => a.city.localeCompare(b.city));

    return sortedCities.map(option => ({
      value: option.city,
      label: option.city,
      population: parseInt(option.population),
    }));
  }, [options]);

  const largestCity = useMemo(() => {
    if (sortedOptions.length > 0) {
      return sortedOptions.reduce((maxCity, currentCity) => (currentCity.population > maxCity.population ? currentCity : maxCity));
    } else {
      return undefined;
    }
  }, [sortedOptions]);

  return { sortedOptions, largestCity };
};
