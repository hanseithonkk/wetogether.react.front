import styled from 'styled-components';

export const MyGroupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  height: 100%;
`;

export const MyGroupPageMeetBoxContainer = styled.div`
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

export const MyGroupPageTopSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  row-gap: 1rem;
`;

export const MyGroupPageTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3rem;
  margin-left: 1.1rem;
`;

export const MyGroupPageButtonWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 98;
  padding: 0rem 0.6rem 1rem 0.6rem;
  background-color: white;
`;

export const MyGroupPageButton = styled.div<{ isSelected?: boolean }>`
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
