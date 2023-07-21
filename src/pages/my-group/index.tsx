import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { MeetingBox } from '@/components';
import { UseGetUserGroup, useGetGroup } from '@/api/query/useGroup';

import * as S from './styled';

export const MY_GROUP_LIST = [
  {
    name: '예정됨',
    href: 'expected',
  },
  {
    name: '완료됨',
    href: 'checked',
  },
];

export const MyGroupPage: React.FC = () => {
  const nickname = localStorage.getItem('nickname');
  const { data } = UseGetUserGroup(nickname || '');
  const navigate = useNavigate();

  const { option } = useParams<{ option: string }>();

  const isActive = (activeTab?: string, option?: string) => activeTab === option;

  return (
    <S.MyGroupPageContainer>
      <S.MyGroupPageTopSection>
        <S.MyGroupPageTitle>내 모임</S.MyGroupPageTitle>
        <S.MyGroupPageButtonWrapper>
          {MY_GROUP_LIST.map(({ name, href }) => (
            <S.MyGroupPageButton
              isSelected={isActive(option, href)}
              onClick={() => navigate(`/my-group/${href}`)}
            >
              {name}
            </S.MyGroupPageButton>
          ))}
        </S.MyGroupPageButtonWrapper>
      </S.MyGroupPageTopSection>
      <S.MyGroupPageMeetBoxContainer>
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
              href={`/group-location/${id}`}
              hasButton={true}
            />
          );
        })}
      </S.MyGroupPageMeetBoxContainer>
    </S.MyGroupPageContainer>
  );
};
