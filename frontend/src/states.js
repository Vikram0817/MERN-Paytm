import { atom } from 'recoil';

export const usernameState = atom({
  key: 'usernameState',
  default: '',
});

export const firstNameState = atom({
  key: 'firstNameState',
  default: '',
});

export const lastNameState = atom({
  key: 'lastNameState',
  default: '',
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});
