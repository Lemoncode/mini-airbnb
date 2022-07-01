import * as React from 'react';

import { PropsWithChildrenOnly } from '@/react';

import * as api from './api';
import { AuthContext } from './auth.context';

import { createEmptyAuthContext, AuthContextModel } from './auth.model';

interface Props {
  LoginComponent: React.FC<{
    onLogin: (user: string, password: string) => void;
  }>;
}

export const AuthProvider: React.FC<PropsWithChildrenOnly> = (props) => {
  const { children } = props;

  const [ready, setReady] = React.useState(false);
  const [value, setValue] = React.useState<AuthContextModel>(() =>
    createEmptyAuthContext()
  );

  const logout = React.useCallback(() => {
    setValue(createEmptyAuthContext());
    api.logout();
  }, []);

  const handleLogin = (user: string, password: string) => {
    api
      .validateLoginUser(user, password)
      .then(() => {
        setValue({ ...value, logout, isLoggedIn: true });
      })
      .catch(() => {
        alert('Usuario/Contraseña incorrecto');
      });
  };

  React.useEffect(() => {
    api
      .getAuthorise()
      .then(() => {
        setValue({ ...value, logout, isLoggedIn: true });
      })
      .catch(() => setValue({ ...value, isLoggedIn: false }))
      .finally(() => setReady(true));
  }, []);

  return (
    <>
      {!ready ? (
        <h3>Loading....</h3>
      ) : value.isLoggedIn ? (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      ) : (
        <props.LoginComponent onLogin={handleLogin} />
      )}
    </>
  );
};
