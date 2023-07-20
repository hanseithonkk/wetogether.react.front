import React from 'react';
import * as S from "./styled"

export const MainPage: React.FC = () => {
  return (
    <>
      <S.MainPageContainer>
        <S.MainPageTopSection>
          <S.MainPageTitle>만나서 반가워요 :)<br />
            먼저 이름을 알려주세요
          </S.MainPageTitle>
          <S.MainPageInput placeholder='이름을 입력해주세요' />
        </S.MainPageTopSection >
        <S.MainPageButtonWrapper>
          <S.MainPageButton>계속</S.MainPageButton>
        </S.MainPageButtonWrapper>
      </S.MainPageContainer >
    </>
  );
};
