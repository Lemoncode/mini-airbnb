import axios from 'axios';
import { apiRoutes } from '@/core/api-configuration/api.constants';

export const validateLoginUser = async (login: string, password: string) => {
  return axios
    .post(apiRoutes.security.login, {
      email: login,
      password,
    })
    .then((r) => r.data);
};

export const getAuthorise = async () => {
  return axios.get(apiRoutes.security.authorise);
};

export const logout = async () => {
  return axios.post(apiRoutes.security.logout);
};
