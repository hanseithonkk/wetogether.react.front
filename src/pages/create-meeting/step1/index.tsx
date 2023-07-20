import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { BsChevronLeft } from 'react-icons/bs';

import { Button, CreateMeetingTitle } from '@/components';

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

  const navigate = useNavigate();

  const onValid = ({ name }: CreateMeetingStep1Values) => {
    navigate(`/create-meeting/step2?${name}`);
  };

  return (
    <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
      <S.CreateMeetingStep1PageTopSection>
        <CreateMeetingTitle text="모임의 이름을 주어주세요." />
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
