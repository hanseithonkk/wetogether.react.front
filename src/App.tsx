import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage, MainPage, MeetingPage, TAB_LIST } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/main" >
        <Route index element={<Navigate to={`/main/${TAB_LIST[0].href}`} />} />
        <Route path=':tabName' element={<MainPage />} />
      </Route>
      <Route path='/meeting/:meetingId' element={<MeetingPage />} />
    </Routes>
  );
};

export default App;
