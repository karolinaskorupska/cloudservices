import React from 'react';
import SubpageCarousel from 'components/SubpageCarousel/SubpageCarousel';
import { SubpageContainerStyles, OverallDataFlight, Span, FlightDescriptionStyle } from './SubpageMain.styled';

const SubpageMain = () => (
  <>
    <SubpageContainerStyles>
      <OverallDataFlight>
        <Span>
          Lot: <b>Starlink -23 (v1.0)</b>
        </Span>
        <Span>
          Data lotu: <b>2021-04-07</b>
        </Span>
        <Span>
          Status: <b>Udany</b>
        </Span>
      </OverallDataFlight>
      <OverallDataFlight>
        <Span>
          Załoga: <b>0</b>
        </Span>
        <Span>
          Rakieta: <b>Falcon 9</b>
        </Span>
        <Span>
          Start: <b>CCSFS SK 40 COPE CORE</b>{' '}
        </Span>
      </OverallDataFlight>
    </SubpageContainerStyles>
    <SubpageCarousel />
    <FlightDescriptionStyle>
      Lot: Starlink - 23 (v 1.0) Data lotu: 2021-04-07 Status: Udany Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
      laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus
      pronin sapien nunc accuan eget.
    </FlightDescriptionStyle>
  </>
);

export default SubpageMain;
