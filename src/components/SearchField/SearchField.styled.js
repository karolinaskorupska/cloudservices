import styled from 'styled-components';

export const SearchFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Input = styled.input`
  width: 275px;
  height: 40px;
  padding: 2px 2px 2px 20px;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: normal;
  color: #000000;
  vertical-align: none;
  text-align: left;
  text-transform: none;
  background-color: #ffffff;
  border: 1px solid rgb(132, 131, 131);
  border-radius: 8px;
`;

export const Label = styled.label`
  color: rgb(132, 131, 131);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
`;
