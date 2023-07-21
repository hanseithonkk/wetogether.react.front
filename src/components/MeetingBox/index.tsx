import React from 'react';
import { useNavigate } from 'react-router';

import { MeetingIcon } from '../MeetingIcon';

import * as S from './styled';

export interface MeetingProps {
  href: string;
  title: string;
  place: string;
  joinPeople: string;
  time: string;
}

export const MeetingBox: React.FC<MeetingProps> = ({ title, place, joinPeople, time, href }) => {
  const navigate = useNavigate();
  return (
    <S.MeetingBoxContainer onClick={() => navigate(`${href}`)}>
      <S.MeetingBoxTitle>{title}</S.MeetingBoxTitle>
      <MeetingIcon place={place} joinPeople={joinPeople} time={time} />
    </S.MeetingBoxContainer>
  );
};
