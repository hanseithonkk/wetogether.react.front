import styled from 'styled-components';

export const CreateMeetingStep1PageContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
`;

export const CreateMeetingStep1PageTopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const CreateMeetingStep1PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
`;

export const CreateMeetingStep1PageInput = styled.input`
  margin-top: 1rem;
  width: 85vw;
  height: 3.4rem;
  background-color: #f8f8f8;
  border: none;
  outline: 0;
  border-radius: 0.7rem;
  padding: 0 1.4rem;
  color: #5c5c5c;
  font-size: 1rem;
  &::placeholder {
    font-size: 1rem;
    color: #5c5c5c;
  }
  margin-bottom: 0.5rem;
`;

export const CreateMeetingStep1PageButton = styled.button`
  width: 100%;
  height: 3.4rem;
  background-color: #40ab91;
  border: none;
  outline: 0;
  border-radius: 0.7rem;
  align-self: center;
  justify-self: center;
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;
