import { useState } from 'react';
import { useAtom } from 'jotai';

import { IUserAuth, IResponseUserLogin, IResponseUserRegister } from '../interfaces';
import { userCheckingDB, userLoginDB, userRegisterDB } from '../services';
import { dataUser } from '../store';

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useAtom(dataUser);

  const loginUser = async (dataLogin: IUserAuth): Promise<IResponseUserLogin> => {
    try {
      const data = await userLoginDB(dataLogin);
      localStorage.setItem('token', data?.token ? data?.token : '');
      setUser(data.user!);
      return { ok: true, user: data.user, token: data.token };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const registerUser = async (dataRegister: IUserAuth): Promise<IResponseUserRegister> => {
    try {
      const data = await userRegisterDB(dataRegister);
      return { ok: true, msg: data.msg };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  // todo: corregir
  const checkingUser = async () => {
    const token = localStorage.getItem('token');

    try {
      if (!token) {
        setIsLoading(false);
        return;
      }

      const data = await userCheckingDB(token);

      if (!data.user || !data.token) {
        setIsLoading(false);
        return;
      }

      setUser(data.user);
      localStorage.setItem('token', data.token);
      setIsLoading(false);
      return { ok: true, user: data.user, token: data.token };
    } catch (error) {
      setIsLoading(false);
      return { ok: false };
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
  };

  return { loginUser, registerUser, checkingUser, logoutUser, isLoading, user, setUser };
};
