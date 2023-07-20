import React from "react";
import * as S from "./styled"

export interface MeetingProps {
    title: string;
    place: string;
    joinPeople: string;
    time: string;
}

export const MeetingBox: React.FC<MeetingProps> = ({ title, place, joinPeople, time }) => {
    return (
        <S.MeetingBoxContainer>
            <S.MeetingBoxTitle>{title}</S.MeetingBoxTitle>
            <S.MeetingBoxIconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 15 16" fill="none">
                    <path d="M7.5 1.75C5.08125 1.75 3.125 3.70625 3.125 6.125C3.125 7.2125 3.4375 8.23125 4.00625 9.15C4.6 10.1125 5.38125 10.9375 5.98125 11.9C6.275 12.3687 6.4875 12.8062 6.7125 13.3125C6.875 13.6562 7.00625 14.25 7.5 14.25C7.99375 14.25 8.125 13.6562 8.28125 13.3125C8.5125 12.8062 8.71875 12.3687 9.0125 11.9C9.6125 10.9437 10.3938 10.1187 10.9875 9.15C11.5625 8.23125 11.875 7.2125 11.875 6.125C11.875 3.70625 9.91875 1.75 7.5 1.75ZM7.5 7.84375C6.6375 7.84375 5.9375 7.14375 5.9375 6.28125C5.9375 5.41875 6.6375 4.71875 7.5 4.71875C8.3625 4.71875 9.0625 5.41875 9.0625 6.28125C9.0625 7.14375 8.3625 7.84375 7.5 7.84375Z" fill="#7D7D7D" />
                </svg>
                <S.MeetingBoxText>{place}</S.MeetingBoxText>
            </S.MeetingBoxIconContainer>
            <S.MeetingBoxIconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 15 16" fill="none">
                    <path d="M10 7.375C11.0375 7.375 11.8688 6.5375 11.8688 5.5C11.8688 4.4625 11.0375 3.625 10 3.625C8.9625 3.625 8.125 4.4625 8.125 5.5C8.125 6.5375 8.9625 7.375 10 7.375ZM5 7.375C6.0375 7.375 6.86875 6.5375 6.86875 5.5C6.86875 4.4625 6.0375 3.625 5 3.625C3.9625 3.625 3.125 4.4625 3.125 5.5C3.125 6.5375 3.9625 7.375 5 7.375ZM5 8.625C3.54375 8.625 0.625 9.35625 0.625 10.8125V12.375H9.375V10.8125C9.375 9.35625 6.45625 8.625 5 8.625ZM10 8.625C9.81875 8.625 9.6125 8.6375 9.39375 8.65625C10.1188 9.18125 10.625 9.8875 10.625 10.8125V12.375H14.375V10.8125C14.375 9.35625 11.4563 8.625 10 8.625Z" fill="#7D7D7D" />
                </svg>
                <S.MeetingBoxText>{joinPeople}</S.MeetingBoxText>
            </S.MeetingBoxIconContainer>
            <S.MeetingBoxIconContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 15 16" fill="none">
                    <path d="M12.5 2.375H11.875V1.125H10.625V2.375H4.375V1.125H3.125V2.375H2.5C1.8125 2.375 1.25 2.9375 1.25 3.625V13.625C1.25 14.3125 1.8125 14.875 2.5 14.875H12.5C13.1875 14.875 13.75 14.3125 13.75 13.625V3.625C13.75 2.9375 13.1875 2.375 12.5 2.375ZM12.5 13.625H2.5V5.5H12.5V13.625Z" fill="#7D7D7D" />
                </svg>
                <S.MeetingBoxText>{time}</S.MeetingBoxText>
            </S.MeetingBoxIconContainer>
        </S.MeetingBoxContainer>
    )
}