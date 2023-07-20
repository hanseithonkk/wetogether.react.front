import { Button, CreateMeetingTitle } from "@/components"
import * as S from "./styled"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export interface CreateMeetingStep4Values {
    description: string;
    warningDescription: string;
}

export const CreateMeetingStep4: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateMeetingStep4Values>();

    const navigate = useNavigate();

    const onValid = () => {
        navigate('/main')
    }

    return (
        <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', rowGap: '1.4rem' }}>
                <S.CreateMeetingStep1PageTopSection>
                    <CreateMeetingTitle text={<>
                        마지막 단계에요!<br />
                        모임에 대해 더 알려주세요
                    </>} />
                </S.CreateMeetingStep1PageTopSection >
                <div style={{ width: '100%' }}>
                    <S.CreateMeetingStep1PageInput
                        placeholder="모임에 대한 자세한 설명을 적어주세요!"
                        {...register('description', { required: '모임 설명은 필수 입니다.' })}
                    />
                    <p style={{ color: '#CD5050' }}>{errors.description?.message}</p>
                </div>
                <div style={{ width: '100%' }}>
                    <S.CreateMeetingWarningText
                        placeholder="모임 주의사항, 준비물을 적어 주세요!"
                        {...register('warningDescription', { required: '모임 주의사항은 필수 입니다.' })}
                    />
                    <p style={{ color: '#CD5050' }}>{errors.warningDescription?.message}</p>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <Button text='계속' />
            </div>
        </S.CreateMeetingStep1PageContainer >
    )
}