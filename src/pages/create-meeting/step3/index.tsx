import { Button, CreateMeetingTitle } from "@/components"
import * as S from "./styled"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface CreateMeetingStep3Values {
    date: string;
}

export const CreateMeetingStep3: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateMeetingStep3Values>();

    const navigate = useNavigate();

    const onValid = () => {
        navigate('/create-meeting/step3')
    }

    const today = new Date();
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDay();

    return (
        <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
            <S.CreateMeetingStep1PageTopSection>
                <CreateMeetingTitle text="언제 모일까요?" />
            </S.CreateMeetingStep1PageTopSection >
            <div style={{ width: '100%' }}>
                <S.CreateMeetingStep1PageInput
                    placeholder='상세 위치를 입력해주세요'
                    type="date"
                    id="start"
                    value={`${year}-${month > 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`}`}
                    {...register('date')}
                />
            </div>
            <div style={{ width: "100%" }}>
                <Button text='계속' />
            </div>
        </S.CreateMeetingStep1PageContainer >
    )
}