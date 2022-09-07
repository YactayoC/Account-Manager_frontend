import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AccountManager } from './AccountManager';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AccountManager />
  </React.StrictMode>
);
