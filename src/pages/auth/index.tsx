import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { Button } from '@/components';
import { RegisterFormValues, useAuth } from '@/api';

import * as S from './styled';

export const AuthPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const [username, setUsername] = useState('');

  const { mutate } = useAuth({ nickname: username });

  const onValid = ({ nickname }: RegisterFormValues) => {
    console.log(nickname);
    mutate({ nickname });
  };

  const navigate = useNavigate();

  const onChange = (e: any) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem('nickname') !== null) {
      navigate('/main');
    }
  }, []);

  return (
    <>
      <S.AuthPageContainer onSubmit={handleSubmit(onValid)}>
        <S.AuthPageTopSection>
          <S.AuthPageTitle>
            만나서 반가워요 :)
            <br />
            먼저 이름을 알려주세요
          </S.AuthPageTitle>
          <div>
            <S.AuthPageInput
              placeholder="이름을 입력해주세요"
              {...register('nickname', { required: '이름은 필수 입니다.' })}
              value={username}
              onChange={onChange}
            />
            <p style={{ color: '#CD5050' }}>{errors.nickname?.message}</p>
          </div>
        </S.AuthPageTopSection>
        <div style={{ width: '100%' }}>
          <Button text="계속" />
        </div>
      </S.AuthPageContainer>
    </>
  );
};
