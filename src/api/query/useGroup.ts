import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { CreateMeetingState } from '@/atom';

import {
  CreateCroupValues,
  GroupLocationResults,
  GroupLocationValues,
  GroupsResponse,
  JoinGroupValues,
  createGroup,
  getGroups,
  getGroupLocation,
  joinGroups,
  leaveGroups,
  PatchcGroupLocationValues,
  patchGroupLocation,
  getUserGroup,
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

export const UseGetGroupLocation = ({
  groupId,
  nickname,
}: GroupLocationValues): UseQueryResult<GroupLocationResults> =>
  useQuery('UseGetGroupLocation', () => getGroupLocation({ groupId, nickname }), {
    retry: 0,
    staleTime: 3600,
  });

export const UsePatchGroupLocation = ({
  groupId,
  nickname,
  location,
}: PatchcGroupLocationValues): UseMutationResult => {
  return useMutation(
    'UsePatchGroupLocation',
    () => patchGroupLocation({ groupId, nickname, location }),
    {
      retry: 0,
    },
  );
};

export const UseGetUserGroup = (username: string): UseQueryResult<GroupsResponse[]> =>
  useQuery('UseGetUserGroup', () => getUserGroup(username), {
    retry: 0,
  });
