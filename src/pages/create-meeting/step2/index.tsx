import { Button, CreateMeetingTitle } from "@/components"
import * as S from "./styled"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface CreateMeetingStep2Values {
    location: string;
}

export const CreateMeetingStep2: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateMeetingStep2Values>();

    const navigate = useNavigate();

    const onValid = () => {
        navigate('/create-meeting/step3')
    }

    return (
        <S.CreateMeetingStep1PageContainer onSubmit={handleSubmit(onValid)}>
            <S.CreateMeetingStep1PageTopSection>
                <CreateMeetingTitle text="어디서 모일까요?" />
            </S.CreateMeetingStep1PageTopSection >
            <MapContainer
                center={[37.55179, 126.95171]}
                zoom={20}
                scrollWheelZoom={true}
                tap={true}
                style={{ width: "100%", height: "60%", zIndex: '19' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[37.55179, 126.95171]}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
            </MapContainer>
            <div style={{ width: '100%' }}>
                <S.CreateMeetingStep1PageInput placeholder='상세 위치를 입력해주세요' {...register('location', { required: '위치는 필수 입니다.' })} />
                <p style={{ color: '#CD5050' }}>{errors.location?.message}</p>
            </div>
            <div style={{ width: "100%" }}>
                <Button text='계속' />
            </div>
        </S.CreateMeetingStep1PageContainer >
    )
}