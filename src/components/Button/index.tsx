import React from "react";
import * as S from "./styled"

export interface ButtonProps {
    text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <S.Button>{text}</S.Button>
    )
}