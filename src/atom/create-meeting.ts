import { atom } from 'recoil';

export const CreateMeetingState = atom({
  key: 'CreateMeetingState',
  default: {
    title: '',
    location: '',
    meetingDate: '',
  },
});
