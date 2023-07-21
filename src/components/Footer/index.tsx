import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { BiSolidUserRectangle, BiSolidUser } from 'react-icons/bi';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import * as S from './styled';

export const FOOTER_MENU = [
  {
    text: '찾기',
    href: '/search',
    icon: <MdLocationOn size={30} color={'#48C2A5'} />,
  },
  {
    text: '내 모임',
    href: '/my-group',
    icon: <FaUserFriends size={30} color={'#C3C3C3'} />,
  },
  {
    href: '/create-meeting/step1',
    icon: <AiFillPlusCircle size={46} color={'#48C2A5'} />,
  },
  {
    text: '친구',
    href: '/friend',
    icon: <BiSolidUserRectangle size={30} color={'#C3C3C3'} />,
  },
  {
    text: 'MY',
    href: '/my',
    icon: <BiSolidUser size={30} color={'#C3C3C3'} />,
  },
];

export const Footer: React.FC = () => {
  const navigation = useNavigate();
  return (
    <S.FooterContainer>
      {FOOTER_MENU.map(({ text, icon, href }) => (
        <S.FooterIconWrapper onClick={() => navigation(`${href}`)}>
          {icon}
          <S.FooterText isActive={text === '찾기'}>{text}</S.FooterText>
        </S.FooterIconWrapper>
      ))}
    </S.FooterContainer>
  );
};
