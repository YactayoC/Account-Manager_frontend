import { FC } from 'react';
import { AppRouter } from './routes/AppRouter';
import { Provider as ProviderJotai } from 'jotai';

export const AccountManager: FC = () => {
  return (
    <ProviderJotai>
      <AppRouter />
    </ProviderJotai>
  );
};
