import React from 'react';
import * as S from "./styled"
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Button } from '@/components';

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
      <S.AuthPageContainer onSubmit={handleSubmit(onValid)}>
        <S.AuthPageTopSection>
          <S.AuthPageTitle>만나서 반가워요 :)<br />
            먼저 이름을 알려주세요
          </S.AuthPageTitle>
          <div>
            <S.AuthPageInput placeholder='이름을 입력해주세요' {...register('name', { required: '이름은 필수 입니다.' })} />
            <p style={{ color: '#CD5050' }}>{errors.name?.message}</p>
          </div>
        </S.AuthPageTopSection >
        <div style={{ width: "100%" }}>
          <Button text='계속' />
        </div>
      </S.AuthPageContainer >
    </>
  );
};
