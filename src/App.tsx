import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  AuthPage,
  CreateMeetingStep1,
  CreateMeetingStep2,
  CreateMeetingStep3,
  CreateMeetingStep4,
  MY_GROUP_LIST,
  MainPage,
  MeetingPage,
  MyGroupPage,
  TAB_LIST,
} from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/main">
        <Route index element={<Navigate to={`/main/${TAB_LIST[0].href}`} />} />
        <Route path=":tabName" element={<MainPage />} />
      </Route>
      <Route path="/meeting/:meetingId" element={<MeetingPage />} />
      <Route path="/create-meeting">
        <Route index element={<Navigate to={`/create-meeting/step1`} />} />
        <Route path="step1" element={<CreateMeetingStep1 />} />
        <Route path="step2" element={<CreateMeetingStep2 />} />
        <Route path="step3" element={<CreateMeetingStep3 />} />
        <Route path="step4" element={<CreateMeetingStep4 />} />
      </Route>
      <Route path="/my-group" element={<MyGroupPage />}>
        <Route index element={<Navigate to={`/my-group/${MY_GROUP_LIST[0].href}`} />} />
        <Route path=":option" element={<MyGroupPage />} />
      </Route>
      <Route path="group-location/:groupId" element={<MyGroupPage />} />
    </Routes>
  );
};

export default App;
