import { FieldValues } from 'react-hook-form';
export interface MainPageState extends FieldValues {
  firstName: string;
  lastName: string;
  selectCities: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  email?: string;
  checkbox?: boolean;
}
