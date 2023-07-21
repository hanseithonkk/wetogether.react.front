import React from 'react';
import { useParams } from 'react-router-dom';

import { CreateMeetingTitle } from '@/components';
import { UseGetGroupLocation, useGetGroup } from '@/api/query/useGroup';

import * as S from './styled';

export const GroupLocationPage: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const nickname = localStorage.getItem('nickname');
  const { data } = UseGetGroupLocation({
    groupId: +(groupId ?? 0),
    nickname: nickname || '',
  });
  console.log(data);
  return (
    <>
      {data ? (
        <S.GroupLocationPageContainer>
          <S.GroupLocationPageTopSection>
            <CreateMeetingTitle
              text={
                <>
                  {data.length}명이 <br />
                  모임으로 가고 있어요
                </>
              }
            />
          </S.GroupLocationPageTopSection>
        </S.GroupLocationPageContainer>
      ) : (
        <>
          <S.GroupLocationPageContainer>
            <h1>loading...</h1>
          </S.GroupLocationPageContainer>
        </>
      )}
    </>
  );
};
