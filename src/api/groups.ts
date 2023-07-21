import { API_SUFFIX, instance } from './api';

export interface UserInfoResponse {
  id: number;
  nickname: string;
}

export interface GroupUserRespose {
  id: number;
  userId: number;
  meetingId: number;
  comment: string;
  user: UserInfoResponse;
}

export interface GroupsResponse {
  id: number;
  userId: number;
  title: string;
  content: string;
  important: string;
  locationString: string;
  location: string;
  maxUser: number;
  meetingDate: string;
  user: UserInfoResponse;
  users: [GroupUserRespose];
  like: [];
}

export interface JoinGroupValues {
  groupId: number;
  nickname: string;
  comment?: string;
}

export interface CreateCroupValues {
  nickname: string;
  title?: string;
  location?: string;
  maxUser?: number;
  meetingDate?: string;
  content?: string;
  important?: string;
}

export const getGroups = async (): Promise<GroupsResponse[]> => {
  const { data } = await instance.get(API_SUFFIX.GROUPS);
  return data;
};

export const joinGroups = async ({ groupId, nickname, comment }: JoinGroupValues) => {
  const { data } = await instance.post(
    `${API_SUFFIX.GROUPS}/${groupId}/involves?nickname=${nickname}`,
    { comment: comment },
  );
  return data;
};

export const leaveGroups = async ({ groupId, nickname }: JoinGroupValues) => {
  const { data } = await instance.delete(
    `${API_SUFFIX.GROUPS}/${groupId}/involves?nickname=${nickname}`,
  );
  return data;
};

export const createGroup = async ({
  nickname,
  title,
  location,
  maxUser,
  meetingDate,
  content,
  important,
}: CreateCroupValues) => {
  const { data } = await instance.post(`${API_SUFFIX.GROUPS}?nickname=${nickname}`, {
    title,
    location,
    maxUser,
    meetingDate,
    content,
    important,
  });
  return data;
};
