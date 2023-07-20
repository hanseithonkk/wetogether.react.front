import styled from "styled-components";

export const MeetingPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.8rem;
    padding: 1.4rem;
`;

export const MeetingTitle = styled.h1`
    font-size: 1.4rem;
    font-weight: 700;
`;

export const UserSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.2rem;
`;

export const UserImage = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;

export const Username = styled.span`
    font-size: 1.4rem;
    font-weight: 700;
`;

export const UserDescription = styled.p`
    margin-top: 0.4rem;
    font-size: 1.1rem;
    font-weight: 400;
`;

export const MeetingPageDescription = styled.p`
    font-size: 1.4rem;
    line-height: 2.1rem;
    font-weight: 300;
`;

export const MeetingPageWaringBox = styled.div`
    width: 100%;
    background-color: #F8F8F8;
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
    padding: 1.4rem;
`;

export const MeetingWarningBoxTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
`;

export const MeetingWarningDescription = styled.p`
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.4rem;
`;

export const MeetingPeopleList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.1rem;
`;

export const MeetingPagePeopleItems = styled.div`
    width: 100%;
    padding: 0.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: 1.1rem;
`;

export const MeetingPagePeopleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.2rem;
`;

export const MeetingPagePeopleImage = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
`;

export const MeetingPagePeopleName = styled.span`
    font-size: 1.3rem;
    font-weight: 600;
`;

export const MeetingPagePeopleDescription = styled.p`
    margin-top: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
`;

export const MeetingPageInput = styled.input`
    width: 100%;
    height: 3.4rem;
    background-color: #f8f8f8;
    border: none;
    outline: 0;
    border-radius: 0.7rem;
    padding: 0 1.4rem;
    font-size: 1rem;
    &::placeholder{
        font-size: 1rem;
        color: #5C5C5C;
    }
    margin-bottom: .5rem;
`;
