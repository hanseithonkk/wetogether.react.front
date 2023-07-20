import { UseQueryResult, useQuery } from 'react-query';

import { GroupsResponse, getGroups } from '../groups';

export const useGetGroup = (): UseQueryResult<GroupsResponse[]> =>
  useQuery('useGetGroup', getGroups, {
    staleTime: 3600,
    retry: 0,
  });
