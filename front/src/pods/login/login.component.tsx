import React from 'react';
import './login.styles.css';
import { createEmptyLogin, Login } from './login.vm';

interface Props {
  onLogin: (user: string, password: string) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [user, setUser] = React.useState<Login>(createEmptyLogin);

  const handleLogin = () => onLogin(user.login, user.password);

  const handleChange =
    (field: keyof Login): React.ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      setUser({
        ...user,
        [field]: event.target.value,
      });
    };

  return (
    <div className="login_root">
      <div className="login_container">
        <label>Email</label>
        <input value={user.login} onChange={handleChange('login')} />
        <label>Contraseña</label>
        <input
          type="password"
          value={user.password}
          onChange={handleChange('password')}
        />
        <button className="login_button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};
