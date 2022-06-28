export interface Login {
  login: string;
  password: string;
}

export const createEmptyLogin = (): Login => ({
  login: '',
  password: '',
});
