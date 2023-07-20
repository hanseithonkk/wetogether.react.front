import React from "react";
import * as S from "./styled"
import { useNavigate } from "react-router";
import { BsChevronLeft } from "react-icons/bs";

export interface CreateMeetingTitleProps {
    text: string;
}

export const CreateMeetingTitle: React.FC<CreateMeetingTitleProps> = ({ text }) => {
    const navigate = useNavigate();

    return (
        <>
            <BsChevronLeft size={28} onClick={() => navigate(-1)} />
            <S.CreateMeetingStep1PageTitle>
                {text}
            </S.CreateMeetingStep1PageTitle>
        </>
    )
}