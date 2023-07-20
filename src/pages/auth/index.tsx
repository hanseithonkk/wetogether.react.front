import React from 'react';
import * as S from "./styled"
import { useNavigate } from 'react-router';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.MainPageContainer>
        <S.MainPageTopSection>
          <S.MainPageTitle>만나서 반가워요 :)<br />
            먼저 이름을 알려주세요
          </S.MainPageTitle>
          <S.MainPageInput placeholder='이름을 입력해주세요' />
        </S.MainPageTopSection >
        <S.MainPageButtonWrapper onClick={() => navigate('/main')}>
          <S.MainPageButton>계속</S.MainPageButton>
        </S.MainPageButtonWrapper>
      </S.MainPageContainer >
    </>
  );
};
