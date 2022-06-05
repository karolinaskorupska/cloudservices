import React from 'react';
import BackButtonImage from './BackButtonImage.png';
import { SubpageHeaderStyles, BackButtonStyles, DetailsStyles } from './SubpageHeader.styled';
import { Link } from 'react-router-dom';

const SubpageHeader = () => (
  <SubpageHeaderStyles>
    <BackButtonStyles>
      <Link to="/">
        <img src={BackButtonImage}></img>
      </Link>
    </BackButtonStyles>
    <DetailsStyles>Szczegóły lotu: #666</DetailsStyles>
  </SubpageHeaderStyles>
);

export default SubpageHeader;
