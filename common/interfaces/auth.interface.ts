export interface IUserLogin {
  username: string;

  password: string;
}

export interface IUserRegister {
  email: string;

  password: string;

  confirmPassword: string;
}

export interface IResetPasswordRequest {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}
