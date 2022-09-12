import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { IUserAuth, ResponseUserLogin, ResponseUserRegister } from '../interfaces';
import { userLoginDB, userRegisterDB } from '../services';
import { dataUser } from '../store';

export const useUser = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useAtom(dataUser);

  const loginUser = async (dataLogin: IUserAuth): Promise<ResponseUserLogin> => {
    try {
      const data = await userLoginDB(dataLogin);
      localStorage.setItem('token', data?.token ? data?.token : '');
      setUser(data.user!);
      return { ok: true, user: data.user, token: data.token };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const registerUser = async (dataRegister: IUserAuth): Promise<ResponseUserRegister> => {
    try {
      const data = await userRegisterDB(dataRegister);
      return { ok: true, msg: data.msg };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
  };

  return { loginUser, registerUser, logoutUser };
};
