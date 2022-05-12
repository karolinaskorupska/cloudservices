import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 148px;
  height: 40px;
  overflow: hidden;
  border: 1px solid rgba(227, 225, 225, 1);
  background-color: rgba(249, 249, 249, 1);
  border-radius: 10px;
  color: rgb(227, 225, 225);
  font-family: 'ArialMT', 'Arial', sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: lightblue;
    color: lightblue;
  }
`;

const ButtonMore = () => <StyledButton className="buttonMore">Więcej></StyledButton>;

export default ButtonMore;
