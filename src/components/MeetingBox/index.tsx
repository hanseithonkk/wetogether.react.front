import React from 'react';
import { useNavigate } from 'react-router';

import { MeetingIcon } from '../MeetingIcon';
import { Button } from '../Button';

import * as S from './styled';

export interface MeetingProps {
  href: string;
  title: string;
  place: string;
  joinPeople: string;
  time: string;
  hasButton?: boolean;
}

export const MeetingBox: React.FC<MeetingProps> = ({
  title,
  place,
  joinPeople,
  time,
  href,
  hasButton,
}) => {
  const navigate = useNavigate();
  return (
    <S.MeetingBoxContainer onClick={() => navigate(`${href}`)}>
      <S.MeetingBoxTitle>{title}</S.MeetingBoxTitle>
      <MeetingIcon place={place} joinPeople={joinPeople} time={time} />
      {hasButton && <S.MeetingButton>참가하기</S.MeetingButton>}
    </S.MeetingBoxContainer>
  );
};
