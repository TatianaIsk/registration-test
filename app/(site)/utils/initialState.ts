import MainPageState from './MainPageState';

const initialState: MainPageState = {
  firstName: '',
  lastName: '',
  selectCities: '',
  password: '',
  confirmPassword: '',
  phone: '',
  email: '',
  checkbox: false,

  errorFirstName: '',
  errorLastName: '',
  errorSelect: '',
  errorPassword: '',
  errorConfirm: '',
  errorEmail: '',
};

export default initialState;
