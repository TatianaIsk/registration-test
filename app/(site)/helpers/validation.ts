import MainPageState from '../utils/MainPageState';

export const validation = (state: MainPageState, setState: React.Dispatch<React.SetStateAction<MainPageState>>) => {
  if (state.firstName.length === 0) {
    setState(prev => ({ ...prev, errorFirstName: 'Это поле обязательное' }));
  } else {
    setState(prev => ({ ...prev, errorFirstName: '' }));
  }

  if (state.lastName.length === 0) {
    setState(prev => ({ ...prev, errorLastName: 'Это поле обязательное' }));
  } else {
    setState(prev => ({ ...prev, errorLastName: '' }));
  }

  if (state.selectCities.length === 0) {
    setState(prev => ({ ...prev, errorSelect: 'Это поле обязательное' }));
  } else {
    setState(prev => ({ ...prev, errorSelect: '' }));
  }

  if (state.password.length === 0) {
    setState(prev => ({ ...prev, errorPassword: 'Укажите пароль' }));
  } else if (state.password.length < 8) {
    setState(prev => ({ ...prev, errorPassword: 'Пароль должен содержать не менее 8 символов' }));
  } else {
    setState(prev => ({ ...prev, errorPassword: '' }));
  }

  if (state.password !== state.confirmPassword) {
    setState(prev => ({ ...prev, errorConfirm: 'Пароли не совпадают' }));
  } else {
    setState(prev => ({ ...prev, errorConfirm: '' }));
  }

  if (state.checkbox === true) {
    setState(prev => ({ ...prev, errorEmail: !state.email ? 'Это поле обязательное' : !/^.+@.+\..+$/.test(state.email) ? 'Неверный формат электронной почты' : '' }));
  } else {
    setState(prev => ({ ...prev, errorEmail: '' }));
  }
};
