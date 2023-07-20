import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthPage, MainPage } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/main" element={<MainPage />} >
        <Route path=':tabName' element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
