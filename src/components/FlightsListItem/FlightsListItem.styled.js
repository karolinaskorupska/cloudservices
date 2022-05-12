import styled from 'styled-components';

// const LargeDispayWidth = '1160px';
// const PortraitTabletWidth = '728px';
// const LandscapePhoneWidth = '440px';

export const Element = styled.li`
  background-color: rgba(255, 255, 255, 1);
  background-color: pink;
  width: 1160px;
  height: 255px;
  background: inherit;
  background-color: inherit;
  border: none;
  border-radius: 20px;
  -moz-box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.349019607843137);
  -webkit-box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.349019607843137);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.349019607843137);
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const FlightMainPhoto = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.photoBkg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.txtLight};
  font-size: ${({ theme }) => theme.fontSize.mediumFont};
`;

export const FlightInfo = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bkgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.txtDark};
  padding-left: 40px;
`;

export const FlightNumber = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.mediumFont};
  font-weight: 400;
`;

export const FlightName = styled.span`
  font-weight: 800;
`;
