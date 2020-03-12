import styled, { css } from 'styled-components';

const googleSignIn = css`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignIn;
  }
  return props.inverted && inverted;
};

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  border: none;
  background-color: black;
  color: white;
  min-width: 165px;
  width: auto;
  padding: 0 35px;
  height: 50px;
  line-height: 50px;
  letter-spacing: 0.5px;
  transition: all 0.5s ease;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: 'Open Sans Condensed', sans-serif;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${getButtonStyles}
`;
