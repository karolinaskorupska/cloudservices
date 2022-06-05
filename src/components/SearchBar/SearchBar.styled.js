import styled from 'styled-components';

export const SearchForm = styled.form`
  background-color:  ${({ theme }) => theme.colors.bkgColor});
  margin: 0 auto;
  width: 65%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid grey;
`;

export const SearchButton = styled.button`
  width: 275px;
  height: 40px;
  background-color: rgb(48, 194, 213);
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  box-shadow: none;
  color: #ffffff;
  font-size: 13px;
  text-align: center;
  cursor: pointer;
`;
