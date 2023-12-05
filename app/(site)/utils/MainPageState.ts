interface MainPageState {
  [key: string]: string | boolean;
  firstName: string;
  lastName: string;
  selectCities: string;
  password: string;
  confirmPassword: string;
  phone: string;
  email: string;
  checkbox: boolean;
  
  errorFirstName: string;
  errorLastName: string;
  errorSelect: string;
  errorPassword: string;
  errorConfirm: string;
  errorEmail: string;
}

export default MainPageState;