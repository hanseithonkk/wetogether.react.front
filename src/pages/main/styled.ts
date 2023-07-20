import styled from "styled-components";

export const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const MainPageTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3rem;
    margin-left: 1.1rem;
    padding: 0.4rem 0;
`;

export const MainPageBottomSection = styled.div`
    position: absolute;
    bottom: 0;
    height: 22rem;
    width: 100%;
    background-color: white;   
    border-radius: 1rem 1rem 0 0 ;
    z-index: 99;
    display: flex;
    flex-direction: column;
    /* row-gap: 2rem; */
    overflow: scroll;
`;

export const MainPageButtonWrapper = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    z-index: 99;
    padding: 2rem 0.6rem 1rem 0.6rem;
    background-color: white;
`;

export const MainPageButton = styled.div<{ isSelected?: boolean }>`
    width: 50%;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 600;
    color:${({ isSelected }) => isSelected ? 'white' : 'black'};
    background-color: ${({ isSelected }) => isSelected ? '#48C2A5' : '#f8f8f8'};
    box-shadow: ${({ isSelected }) => isSelected ? '0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)' : '0'};
    border-radius: 7px;
    transition: all .2s ease-in-out;
`;

export const MainPageMeetBoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    padding: 0 0.6rem;
`;
