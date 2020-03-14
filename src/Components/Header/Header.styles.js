import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const option = css`
  padding: 0 1.5rem;
  cursor: pointer;
  @media (max-width: 800px) {
    padding: 0 0.5rem;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 85vw;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    margin-left: 1rem;
`;

export const OptionsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
  font-weight: 600;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const OptionLink = styled(Link)`
  ${option}
`;
export const OptionDiv = styled.div`
  ${option}
`;

export const LogoContainer = styled(Link)`
  color: white;
`;
