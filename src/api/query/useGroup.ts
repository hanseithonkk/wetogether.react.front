import { UseMutationResult, UseQueryResult, useMutation, useQuery } from 'react-query';

import { GroupsResponse, JoinGroupValues, getGroups, joinGroups } from '../groups';

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
