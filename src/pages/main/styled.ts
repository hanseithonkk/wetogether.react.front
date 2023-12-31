import styled from 'styled-components';

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

export const MainPageBottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainPageAddButtonWrapper = styled.div`
  z-index: 99;
  justify-self: flex-end;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 5rem;
  height: 5rem;
  background-color: #40ab91;
  border-radius: 50%;
  z-index: 99;
  transition: all 0.2s ease-in-out;
  &:active {
    opacity: 0.3;
  }
`;

export const MainPageBottomSection = styled.div`
  position: absolute;
  bottom: 0;
  height: 30rem;
  width: 100%;
  background-color: white;
  border-radius: 1rem 1rem 0 0;
  z-index: 98;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const MainPageButtonWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 98;
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
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  background-color: ${({ isSelected }) => (isSelected ? '#48C2A5' : '#f8f8f8')};
  box-shadow: ${({ isSelected }) =>
    isSelected ? '0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)' : '0'};
  border-radius: 7px;
  transition: all 0.2s ease-in-out;
`;

export const MainPageMeetBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  margin-bottom: 8rem;
  margin-top: 1rem;
  padding: 0 0.6rem;
`;
