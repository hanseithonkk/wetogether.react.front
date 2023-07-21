import React from 'react';

import { MeetingBox } from '@/components';
import { useGetGroup } from '@/api/query/useGroup';

import * as S from './styled';

export const MyGroupPage: React.FC = () => {
  const { data } = useGetGroup();
  return (
    <S.MyGroupPageContainer>
      <S.MainPageMeetBoxContainer>
        {data?.map(({ id, title, maxUser, users, locationString, meetingDate }) => {
          const date = new Date(Date.parse(meetingDate));
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDay();
          const hour = date.getHours();
          const minutes = date.getMinutes();
          return (
            <MeetingBox
              title={title}
              place={locationString}
              joinPeople={users.length + '/' + maxUser + '명 참여'}
              time={`${year}년 ${month}월 ${day}일, ${hour}시 ${minutes}분`}
              id={id}
            />
          );
        })}
      </S.MainPageMeetBoxContainer>
    </S.MyGroupPageContainer>
  );
};
