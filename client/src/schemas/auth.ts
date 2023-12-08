import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup
    .string()
    .required('Username is required!')
    .min(8, 'Username needs to be 8 characters minimum!')
    .max(24, 'Username needs to be 24 characters maximum!'),
  password: yup
    .string()
    .required('Password is required!')
    .min(8, 'Password needs to be 8 characters minimum!')
    .max(24, 'Password needs to be 24 characters maximum!'),
});
