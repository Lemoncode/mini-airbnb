const BASE_API_URL = '/api';

export const apiRoutes = {
  houses: {
    list: `${BASE_API_URL}/houses?page=1&pageSize=10`,
    detail: (id: string) => `${BASE_API_URL}/houses/${id}`,
  },
  security: {
    login: `${BASE_API_URL}/security/login`,
    authorise: `${BASE_API_URL}/security/authorise`,
    logout: `${BASE_API_URL}/security/logout`,
  },
};
