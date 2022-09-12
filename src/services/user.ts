import accountManagerAPI from '../api/accountManagerAPI';
import { IUserAuth, ResponseUserLogin, ResponseUserRegister } from '../interfaces';

const userRegisterDB = async ({ email, password, fullname }: IUserAuth): Promise<ResponseUserRegister> => {
  const { data } = await accountManagerAPI.post('/register', { email, password, fullname });
  return data;
};

const userLoginDB = async ({ email, password }: IUserAuth): Promise<ResponseUserLogin> => {
  const { data } = await accountManagerAPI.post('/login', { email, password });
  return data;
};

export { userRegisterDB, userLoginDB };
