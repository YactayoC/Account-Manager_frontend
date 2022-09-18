import accountManagerAPI from '../api/accountManagerAPI';
import { IUserAuth, IResponseUserLogin, IResponseUserRegister } from '../interfaces';

const userRegisterDB = async ({ email, password, fullname }: IUserAuth): Promise<IResponseUserRegister> => {
  const { data } = await accountManagerAPI.post('/auth/register', { email, password, fullname });
  return data;
};

const userLoginDB = async ({ email, password }: IUserAuth): Promise<IResponseUserLogin> => {
  const { data } = await accountManagerAPI.post('/auth/login', { email, password });
  return data;
};

const userCheckingDB = async (token: string): Promise<IResponseUserLogin> => {
  const { data } = await accountManagerAPI('/auth/revalidate-token', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const userConfirmDB = async(uid: string) => {
  const { data } = await accountManagerAPI(`/auth/confirm-user/${uid}`);
  return data;
}

export { userRegisterDB, userLoginDB, userCheckingDB, userConfirmDB };
