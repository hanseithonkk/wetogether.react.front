import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import { useSetRecoilState } from 'recoil';

import { Button, CreateMeetingTitle } from '@/components';
import { CreateMeetingState } from '@/atom';
import { useCreateGroup } from '@/api/query/useGroup';

import * as S from './styled';

export interface CreateMeetingStep4Values {
  description: string;
  warningDescription: string;
  maxUser: number;
}

export const CreateMeetingStep4: React.FC = () => {
  const { handleSubmit } = useForm<CreateMeetingStep4Values>();
  const navigate = useNavigate();

  const [descriptionText, setDescriptionText] = useState('');
  const [warningText, setWarningText] = useState('');
  const [maxUser, setMaxUser] = useState(0);

  const nickname = localStorage.getItem('nickname');

  const { mutate } = useCreateGroup({
    nickname: nickname || '',
    content: descriptionText,
    important: warningText,
    maxUser,
  });

  const onValid = () => {
    mutate({});
  };

  const onDescriptionChange = (e: any) => {
    setDescriptionText(e.target.value);
  };

  const onWarningChange = (e: any) => {
    setWarningText(e.target.value);
  };

  const onMaxUserChange = (e: any) => {
    setMaxUser(e.target.value);
  };

  useEffect(() => {
    if (!nickname) {
      navigate('/');
    }
  }, []);

  return (
    <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', rowGap: '1.4rem' }}>
        <S.CreateMeetingStep1PageTopSection>
          <CreateMeetingTitle
            text={
              <>
                마지막 단계에요!
                <br />
                모임에 대해 더 알려주세요
              </>
            }
          />
        </S.CreateMeetingStep1PageTopSection>
        <div style={{ width: '100%' }}>
          <S.CreateMeetingStep1PageInput
            onChange={onDescriptionChange}
            placeholder="모임에 대한 자세한 설명을 적어주세요!"
          />
        </div>
        <div style={{ width: '100%' }}>
          <S.CreateMeetingWarningText
            onChange={onWarningChange}
            placeholder="모임 주의사항, 준비물을 적어 주세요!"
          />
        </div>
        <div style={{ width: '100%' }}>
          <S.CreateMeetingStep3Input
            onChange={onMaxUserChange}
            type="number"
            placeholder="참여자 수를 적어주세요"
          />
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <Button text="계속" />
      </div>
    </S.CreateMeetingStep1PageContainer>
  );
};
