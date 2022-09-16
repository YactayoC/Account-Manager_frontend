import { FC } from 'react';

import { IAccount } from '../../interfaces';
import { LoaderAccounts } from '../loader';
import AccountElement from './AccountElement';

interface Props {
  accounts: IAccount[];
  isLoading: boolean;
}

const AccountsList: FC<Props> = ({ accounts, isLoading }) => {
  const categories = new Set(accounts.map(account => account.category));
  const arrCategories = Array.from(categories);

  if (isLoading) {
    return <LoaderAccounts />;
  }

  return (
    <div className="h-full pb-8">
      {arrCategories.map(category => (
        <div key={category}>
          <h2 className="pb-5 pl-10 text-2xl font-bold text-gray-800 capitalize pt-14">{category}</h2>

          <div className="grid grid-cols-1 gap-12 px-10 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {accounts
              .filter(account => account.category === category)
              .map(account => (
                <AccountElement key={account.id} account={account} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountsList;
