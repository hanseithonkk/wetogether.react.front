import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { CreateMeetingState } from '@/atom';

import {
  CreateCroupValues,
  GroupsResponse,
  JoinGroupValues,
  createGroup,
  getGroups,
  joinGroups,
  leaveGroups,
} from '../groups';

export const useGetGroup = (): UseQueryResult<GroupsResponse[]> =>
  useQuery('useGetGroup', getGroups, {
    staleTime: 3600,
    retry: 0,
  });

export const useJoinGroup = ({
  groupId,
  nickname,
  comment,
}: JoinGroupValues): UseMutationResult => {
  return useMutation('useJoinGroup', () => joinGroups({ groupId, nickname, comment }), {
    onSuccess: () => {
      location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
    retry: 0,
  });
};

export const useLeaveGroup = ({ groupId, nickname }: JoinGroupValues): UseMutationResult => {
  return useMutation('useLeaveGroup', () => leaveGroups({ groupId, nickname }), {
    onSuccess: () => {
      location.reload();
    },
    onError: (err) => {
      console.log(err);
    },
    retry: 0,
  });
};

export const useCreateGroup = ({
  nickname,
  content,
  important,
  maxUser,
}: CreateCroupValues): UseMutationResult => {
  const navigation = useNavigate();
  const createMeeting = useRecoilValue(CreateMeetingState);
  return useMutation(
    'useCreateGroup',
    () =>
      createGroup({
        nickname,
        title: createMeeting.title,
        location: createMeeting.location,
        meetingDate: createMeeting.meetingDate,
        maxUser,
        content,
        important,
      }),
    {
      onSuccess: () => {
        navigation('/main');
      },
      onError: (err) => {
        console.log(err);
      },
      retry: 0,
    },
  );
};
