import React from "react";
import * as S from "./styled"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button } from "@/components";
import { BsChevronLeft } from "react-icons/bs"

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

    const onValid = () => {
        navigate('/main')
    }


    return (
        <S.AuthPageContainer onSubmit={handleSubmit(onValid)}>
            <S.AuthPageTopSection>
                <BsChevronLeft size={28} onClick={() => navigate(-1)} />
                <S.AuthPageTitle>
                    모임의 이름을 지어주세요
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
    )
}