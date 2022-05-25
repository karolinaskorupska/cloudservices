import React from 'react';
import BackButtonImage from './BackButtonImage.png';
import { SubpageHeaderStyles, BackButtonStyles, DetailsStyles } from './SubpageHeader.styled';

const SubpageHeader = () => (
  <SubpageHeaderStyles>
    <BackButtonStyles>
      <img src={BackButtonImage}></img>
    </BackButtonStyles>
    <DetailsStyles>Szczegóły lotu: #666</DetailsStyles>
  </SubpageHeaderStyles>
);

export default SubpageHeader;
