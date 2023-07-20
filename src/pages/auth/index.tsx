import React from 'react';
import * as S from "./styled"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export interface FormValues {
  name: string;
}

export const AuthPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const onValid = () => {
    navigate('/main')
  }
  return (
    <>
      <S.AuthPageContainer>
        <S.AuthPageTopSection>
          <S.AuthPageTitle>만나서 반가워요 :)<br />
            먼저 이름을 알려주세요
          </S.AuthPageTitle>
          <div>
            <S.AuthPageInput placeholder='이름을 입력해주세요' {...register('name', { required: '이름은 필수 입니다.' })} />
            <p style={{ color: '#CD5050' }}>{errors.name?.message}</p>
          </div>
        </S.AuthPageTopSection >
        <S.AuthPageButtonWrapper onSubmit={handleSubmit(onValid)} >
          <S.AuthPageButton>계속</S.AuthPageButton>
        </S.AuthPageButtonWrapper>
      </S.AuthPageContainer >
    </>
  );
};
