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
}

export default MainPageState;