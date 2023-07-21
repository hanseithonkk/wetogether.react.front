import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dcdcdc;
  padding: 1rem 1.6rem;
  padding-bottom: 2.2rem;
  background-color: #fff;
  width: 100%;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.span<{ isActive?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? '#48C2A5' : '#C3C3C3')};
`;
