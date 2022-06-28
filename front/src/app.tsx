import React from 'react';
import { AppRouterComponent } from '@/routers';
import { AuthProvider } from './core/providers/auth';
import { LoginComponent } from './pods';

const App: React.FC = () => {
  return (
    <AuthProvider LoginComponent={LoginComponent}>
      <AppRouterComponent />
    </AuthProvider>
  );
};

export default App;
