'use client';
import { useState, useEffect } from 'react';

type ValidationFunction<T> = (value: T) => boolean;

function useValidation<T>(initialValue: T, validationFunction: ValidationFunction<T>) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(validationFunction(value));

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return {
    value,
    setValue,
    isValid,
  };
}

export default useValidation;
