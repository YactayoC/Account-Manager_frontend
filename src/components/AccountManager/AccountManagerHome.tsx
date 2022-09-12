import { FC } from 'react';
import { AccountsList, Navbar } from '../ui';

const AccountManagerHome: FC = () => {
  return (
    <div className="h-full bg-neutral-50">
      <Navbar />
      <AccountsList />
    </div>
  );
};

export default AccountManagerHome;
