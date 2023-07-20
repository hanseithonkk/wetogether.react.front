import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage, CreateMeetingStep1, MainPage, MeetingPage, TAB_LIST } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/main" >
        <Route index element={<Navigate to={`/main/${TAB_LIST[0].href}`} />} />
        <Route path=':tabName' element={<MainPage />} />
      </Route>
      <Route path='/meeting/:meetingId' element={<MeetingPage />} />
      <Route path="/create-meeting" >
        <Route path="step1" element={<CreateMeetingStep1 />} />
        <Route path="step2" element={<MainPage />} />
        <Route path="step3" element={<MainPage />} />
        <Route path="step4" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
