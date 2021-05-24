import { ReqBody } from 'molecules/usersActivity/signUp/redux/types';

export const postSignUp = (body: ReqBody) => ({
  type: 'POST_SIGN_UP',
  body,
});

export const clearSignUp = () => ({
  type: 'CLEAR_SIGN_UP',
});
