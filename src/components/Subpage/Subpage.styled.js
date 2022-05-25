import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: ${({ theme }) => theme.colors.bkgColor});
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;
