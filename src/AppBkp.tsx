import React from 'react';
import GlobalStyle from './styles/global';
import Users from './pages/User';
// import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Users />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
