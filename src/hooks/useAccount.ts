import { useState } from 'react';

import { IRequestAccount, IResponseAccount } from '../interfaces';
import { addAccountDB, updateAccountDB, getAccountsDB, deleteAccountDB, searchAccountDB } from '../services';

export const useAccount = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token') ?? '';

  const addAccount = async (dataAddAccount: IRequestAccount): Promise<IResponseAccount> => {
    try {
      const data = await addAccountDB(dataAddAccount, token);
      return { ok: true, msg: data.msg };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const getAccounts = async (): Promise<IResponseAccount> => {
    try {
      const data = await getAccountsDB(token);
      setIsLoading(false);
      return { ok: true, accounts: data.accounts };
    } catch (error) {
      return { ok: false };
    }
  };

  const updateAccount = async (dataUpdateAccount: IRequestAccount, aid: string): Promise<IResponseAccount> => {
    try {
      const data = await updateAccountDB(dataUpdateAccount, aid, token);
      setIsLoading(false);
      return { ok: true, msg: data.msg };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const deleteAccount = async (aid: string): Promise<IResponseAccount> => {
    try {
      const data = await deleteAccountDB(aid, token);
      setIsLoading(false);
      return { ok: true, msg: data.msg };
    } catch (error) {
      return { ok: false, msg: error.response.data.msg };
    }
  };

  const searchAccount = async (valueSearch: string): Promise<IResponseAccount> => {
    try {
      const data = await searchAccountDB(valueSearch, token);
      setIsLoading(false);
      return { ok: true, accounts: data.accounts };
    } catch (error) {
      return { ok: false };
    }
  };

  return { addAccount, getAccounts, updateAccount, deleteAccount, searchAccount, isLoading };
};
