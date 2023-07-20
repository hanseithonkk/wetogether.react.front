import React from 'react';

import * as S from './styled';

export interface ButtonProps {
  onClick?: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
