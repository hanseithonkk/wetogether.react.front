import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import { UserImage } from '@/assets';
import { Button, MeetingIcon } from '@/components';
import { useGetGroup } from '@/api/query/useGroup';

import * as S from './styled';

export const MeetingPage: React.FC = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const { data } = useGetGroup();
  console.log(data);
  const [like, setLike] = useState(false);

  return (
    <S.MeetingPageContainer>
      {meetingId &&
        data
          ?.filter(({ id }) => id === +meetingId)
          .map(
            ({
              user,
              like,
              users,
              maxUser,
              locationString,
              meetingDate,
              content,
              important,
              title,
            }) => {
              const date = new Date(Date.parse(meetingDate));
              const year = date.getFullYear();
              const month = date.getMonth();
              const day = date.getDay();
              const hour = date.getHours();
              const minutes = date.getMinutes();
              return (
                <>
                  <S.UserSection>
                    <S.UserInfoContainer>
                      <S.UserImage src={UserImage} />
                      <div>
                        <S.Username>{user.nickname}</S.Username>
                        <S.UserDescription>
                          관심 {like ? like.length : 0}건 · 참석 {users ? users.length : 0}건
                        </S.UserDescription>
                      </div>
                    </S.UserInfoContainer>
                    {like ? (
                      <FaHeart onClick={() => setLike(!like)} size={30} color={'#EA3939'} />
                    ) : (
                      <FaRegHeart onClick={() => setLike(!like)} size={30} color={'#5B5B5B'} />
                    )}
                  </S.UserSection>
                  <S.MeetingTitle>{title}</S.MeetingTitle>
                  <MeetingIcon
                    place={locationString}
                    joinPeople={users.length + '/' + maxUser + '명 참여'}
                    time={`${year}년 ${month}월 ${day}일, ${hour}시 ${minutes}분`}
                  />
                  <S.MeetingPageDescription>{content}</S.MeetingPageDescription>
                  <S.MeetingPageWaringBox>
                    <S.MeetingWarningBoxTitle>
                      참여하기 전에 꼭 읽어주세요!
                    </S.MeetingWarningBoxTitle>
                    <S.MeetingWarningDescription>{important}</S.MeetingWarningDescription>
                  </S.MeetingPageWaringBox>
                  <S.MeetingTitle>참여자 목록</S.MeetingTitle>
                  <S.MeetingPeopleList>
                    {users && users.length > 0 && (
                      <S.MeetingPagePeopleItems>
                        <S.MeetingPagePeopleContainer>
                          <S.MeetingPagePeopleImage src={UserImage} />
                          <div>
                            <S.MeetingPagePeopleName>서주</S.MeetingPagePeopleName>
                            <S.MeetingPagePeopleDescription>
                              이 대회 1등 하려 왔습니다.
                            </S.MeetingPagePeopleDescription>
                          </div>
                        </S.MeetingPagePeopleContainer>
                      </S.MeetingPagePeopleItems>
                    )}
                  </S.MeetingPeopleList>
                </>
              );
            },
          )}
      <S.MeetingPageInput placeholder="간단한 내 소개를 작성해주세요." />
      <div>
        <Button text="참여하기" />
      </div>
    </S.MeetingPageContainer>
  );
};
