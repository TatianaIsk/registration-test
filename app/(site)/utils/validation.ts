import MainPageState from './MainPageState';

interface ValidationParams {
  name: string;
  value: string | boolean;
  formValues: MainPageState;
}

interface ValidationResult {
  valid: boolean;
  errorMessage: string;
}

export const validateField = ({ name, value, formValues }: ValidationParams): ValidationResult => {
  let isValid = true;
  let errorMessage = '';

  if (typeof value === 'string') {
    if (name === 'firstName') {
      if (value.trim() === '') {
        isValid = false;
        errorMessage = 'Это поле обязательно';
      }
    } else if (name === 'lastName') {
      if (value.trim() === '') {
        isValid = false;
        errorMessage = 'Это поле обязательно';
      }
    } else if (name === 'selectCities') {
      if (value === '') {
        isValid = false;
        errorMessage = 'Это поле обязательно';
      }
    } else if (name === 'password') {
      if (value.trim() === '') {
        isValid = false;
        errorMessage = 'Пароль является обязательным полем';
      } else if (value.length < 8) {
        isValid = false;
        errorMessage = 'Пароль должен содержать не менее 8 символов';
      } else if (value !== formValues.confirmPassword) {
        isValid = false;
        errorMessage = 'Пароли не совпадают';
      }
    } else if (name === 'email') {
      if (formValues.checkbox && value.trim() === '') {
        isValid = false;
        errorMessage = 'Email является обязательным полем';
      } else if (value.trim() !== '' && !/S+@S+\.S+/.test(value)) {
        isValid = false;
        errorMessage = 'Неверный формат электронной почты';
      }
    }
  }

  return { valid: isValid, errorMessage: errorMessage };
};
