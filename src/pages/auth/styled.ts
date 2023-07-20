import styled from "styled-components";

export const MainPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const MainPageTopSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`;

export const MainPageTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
`;

export const MainPageInput = styled.input`
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
`;

export const MainPageButtonWrapper = styled.div`
    width: 100%;

`;

export const MainPageButton = styled.button`
    width: 100%;
    height: 3.4rem;
    background-color: #40AB91;
    border: none;
    outline: 0;
    border-radius: 0.7rem;
    align-self: center;
    justify-self: center;
    color: white;
    font-size: 1rem;
    font-weight: 600;
`;