import React from 'react';
import { AppRouterComponent } from '@/routers';
import { ReactFCWithChildren } from './react';

const App: React.FC = () => {
  return (
    <AppProviders>
      <AppRouterComponent />
    </AppProviders>
  );
};

const AppProviders: ReactFCWithChildren = (props) => {
  const { children } = props;
  return children;
};

export default App;
