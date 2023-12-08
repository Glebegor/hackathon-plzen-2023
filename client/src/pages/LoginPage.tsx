import React from 'react';
import { useFormik } from 'formik';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { useAuth } from '@hooks/auth';

import { loginSchema } from '@schemas/auth';

export const LoginPage: React.FC = () => {
  const { handleLogin } = useAuth();

  const onLogin = () => {
    handleLogin({
      username: values.username,
      password: values.password,
    });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    onSubmit: onLogin,
    validationSchema: loginSchema,
    initialValues: {
      username: '',
      password: '',
    },
  });

  return (
    <DefaultLayout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.username && touched.username ? (
          <p>{errors.username}</p>
        ) : (
          <br />
        )}
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.password && touched.password ? (
          <p>{errors.password}</p>
        ) : (
          <br />
        )}
        <br />
        <input type="submit" value="Sign in" disabled={isSubmitting} />
      </form>
    </DefaultLayout>
  );
};
