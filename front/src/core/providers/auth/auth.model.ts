export interface User {
  login: string;
}

export interface AuthContextModel {
  isLoggedIn: boolean;
  loggedUser?: User;

  logout?: () => void;
}

export const createEmptyAuthContext = (): AuthContextModel => ({
  isLoggedIn: false,
});
