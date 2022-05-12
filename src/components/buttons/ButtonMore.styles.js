import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 148px;
  height: 40px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  background-color: ${({ theme }) => theme.colors.buttonBkg};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.buttonBorder};
  font-family: 'ArialMT', 'Arial', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xsmallFont};
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.buttonActive};
    color: ${({ theme }) => theme.colors.buttonActive};
  }
`;
