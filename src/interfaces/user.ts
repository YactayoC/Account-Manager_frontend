export interface IUser extends IUserAuth {
  id?: string;
  uid?: string;
  keyConfirm?: string;
  isConfirmed?: boolean;
}

export interface IUserAuth {
  fullname?: string;
  email: string;
  password: string;
}

export interface ResponseUserRegister {
  ok: boolean;
  msg: string;
}

export interface ResponseUserLogin {
  ok: boolean;
  user?: IUser;
  token?: string;
  msg?: string;
}
