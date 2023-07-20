import { API_SUFFIX, instance } from '../api';

export interface RegisterFormValues {
  nickname: string;
}

export const auth = async ({ nickname }: RegisterFormValues) => {
  const { data } = await instance.post(API_SUFFIX.USERS, {
    nickname,
  });
  return data;
};
