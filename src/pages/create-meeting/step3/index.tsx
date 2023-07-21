import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import { Button, CreateMeetingTitle } from '@/components';
import { CreateMeetingState } from '@/atom';

import * as S from './styled';

export interface CreateMeetingStep3Values {
  dateFirst: string;
  dateSecond: string;
}

export const CreateMeetingStep3: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMeetingStep3Values>();

  const navigate = useNavigate();
  const createMeeting = useSetRecoilState(CreateMeetingState);

  const onValid = ({ dateFirst, dateSecond }: CreateMeetingStep3Values) => {
    const date = dateFirst + ' ' + dateSecond;
    const realDate = new Date(date);
    createMeeting((prev) => ({ ...prev, meetingDate: realDate.toString() }));
    navigate('/create-meeting/step4');
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const hour = today.getHours();
  const minutes = today.getMinutes();

  const nickname = localStorage.getItem('nickname');

  useEffect(() => {
    if (!nickname) {
      navigate('/');
    }
  }, []);

  return (
    <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
      <S.CreateMeetingStep1PageTopSection>
        <CreateMeetingTitle text="언제 모일까요?" />
      </S.CreateMeetingStep1PageTopSection>
      <div style={{ width: '100%' }}>
        <h1>날짜를 설정해주세요</h1>
        <S.CreateMeetingStep1PageInput
          type="date"
          id="start"
          placeholder={`${year}-${month > 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`}`}
          {...register('dateFirst', { required: '날짜를 입력해주세요' })}
        />
        <p style={{ color: '#CD5050' }}>{errors.dateFirst?.message}</p>
      </div>
      <div style={{ width: '100%' }}>
        <h1>시간을 설정해주세요</h1>
        <S.CreateMeetingStep1PageInput
          type="time"
          id="start"
          placeholder={`${hour > 10 ? hour : `0${hour}`}:${minutes > 10 ? minutes : `0${minutes}`}`}
          {...register('dateSecond', { required: '시간을 입력해주세요' })}
        />
        <p style={{ color: '#CD5050' }}>{errors.dateSecond?.message}</p>
      </div>
      <div style={{ width: '100%' }}>
        <Button text="계속" />
      </div>
    </S.CreateMeetingStep1PageContainer>
  );
};
