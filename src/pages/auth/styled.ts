import styled from 'styled-components';

export const AuthPageContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
`;

export const AuthPageTopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const AuthPageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
`;

export const AuthPageInput = styled.input`
  width: 100%;
  height: 3.4rem;
  background-color: #f8f8f8;
  border: none;
  outline: 0;
  border-radius: 0.7rem;
  padding: 0 1.4rem;
  font-size: 1rem;
  &::placeholder {
    font-size: 1rem;
    color: #5c5c5c;
  }
  margin-bottom: 0.5rem;
`;

export const AuthPageButton = styled.button`
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
