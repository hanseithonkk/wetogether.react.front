import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useSetRecoilState } from 'recoil';

import { Button, CreateMeetingTitle } from '@/components';
import { CreateMeetingState } from '@/atom';

import * as S from './styled';

export interface CreateMeetingStep1Values {
  name: string;
}

export const CreateMeetingStep1: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMeetingStep1Values>();

  const createMeeting = useSetRecoilState(CreateMeetingState);
  const navigate = useNavigate();

  const onValid = ({ name }: CreateMeetingStep1Values) => {
    createMeeting((prev) => ({ ...prev, title: name }));
    navigate(`/create-meeting/step2`);
  };

  const nickname = localStorage.getItem('nickname');

  useEffect(() => {
    if (!nickname) {
      navigate('/');
    }
  }, []);

  return (
    <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
      <S.CreateMeetingStep1PageTopSection>
        <CreateMeetingTitle text="모임 이름을 지어주세요." />
        <div>
          <S.CreateMeetingStep1PageInput
            placeholder="이름을 입력해주세요"
            {...register('name', { required: '이름은 필수 입니다.' })}
          />
          <p style={{ color: '#CD5050' }}>{errors.name?.message}</p>
        </div>
      </S.CreateMeetingStep1PageTopSection>
      <div style={{ width: '100%' }}>
        <Button text="계속" />
      </div>
    </S.CreateMeetingStep1PageContainer>
  );
};
