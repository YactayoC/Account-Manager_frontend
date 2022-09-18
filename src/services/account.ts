import accountManagerAPI from '../api/accountManagerAPI';
import { IRequestAccount, IResponseAccount } from '../interfaces';

const addAccountDB = async (dataAddAccount: IRequestAccount, token: string): Promise<IResponseAccount> => {
  const { data } = await accountManagerAPI.post('/account/add-account', dataAddAccount, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const getAccountsDB = async (token: string): Promise<IResponseAccount> => {
  const { data } = await accountManagerAPI.get('/account/get-accounts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const updateAccountDB = async (
  dataUpdateAccount: IRequestAccount,
  aid: string,
  token: string
): Promise<IResponseAccount> => {
  const { data } = await accountManagerAPI.put(`/account/update-account/${aid}`, dataUpdateAccount, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const deleteAccountDB = async (aid: string, token: string): Promise<IResponseAccount> => {
  const { data } = await accountManagerAPI.delete(`/account/delete-account/${aid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const searchAccountDB = async (value: string, token: string): Promise<IResponseAccount> => {
  const { data } = await accountManagerAPI.get(`/account/search-account/${value}` ,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export { addAccountDB, getAccountsDB, updateAccountDB, deleteAccountDB, searchAccountDB };
