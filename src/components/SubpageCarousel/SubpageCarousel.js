import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../SubpageCarousel/subpageCarousel.css';
import Img1 from '../../assets/images/1.JPEG';
import Img2 from '../../assets/images/2.JPEG';
import Img3 from '../../assets/images/3.JPEG';
import Img4 from '../../assets/images/4.JPEG';
import Img5 from '../../assets/images/5.JPEG';

const SubpageCarousel = () => (
  <Carousel>
    <div>
      <img src={Img1} />
    </div>
    <div>
      <img src={Img2} />
    </div>
    <div>
      <img src={Img3} />
    </div>
    <div>
      <img src={Img4} />
    </div>
    <div>
      <img src={Img5} />
    </div>
  </Carousel>
);

export default SubpageCarousel;
