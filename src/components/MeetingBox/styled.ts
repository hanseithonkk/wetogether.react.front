import styled from "styled-components";


export const MeetingBoxContainer = styled.div`
    width: 100%;
    box-shadow: 0px 1px 20px -5px rgba(0, 0, 0, 0.25);
    border-radius: 1.2rem;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
`;

export const MeetingBoxTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
`;

export const MeetingBoxIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const MeetingBoxText = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: #7D7D7D;
    margin-left: 1rem;
`;