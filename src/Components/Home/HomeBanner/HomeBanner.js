import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './HomeBanner.css'

const HomeBanner = () => {
     return (
          <div>
               <Carousel variant="dark ">
                    <Carousel.Item style={{"height": "700px"}} >
                         <img  style={{"height": "100%"}}
                              className="d-block w-100 Carousel-img "
                              src="https://www.autosbangla.com/images/slider/slider-img1.jpg"
                              alt="First slide"
                         />
                         <Carousel.Caption>
                              <h5>BMW x1</h5>

                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{"height": "700px"}} >
                         <img style={{"height": "100%"}}
                              className="d-block w-100 Carousel-img "
                              src="https://www.autosbangla.com/images/mercedes-benz/mercedes-benz-glb-200-img3.jpg"
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h5>MERCEDES-BENZ GLB 200 </h5>

                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{"height": "700px"}} >
                         <img style={{"height": "100%"}}
                              className="d-block w-100 Carousel-img"
                              src="https://www.autosbangla.com/images/mercedes-benz/Mercedes-cla-Cla-45-4matic-img3.jpg"
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h5>MERCEDES-BENZ CLA 45 4MATIC</h5>

                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </div>
     );
};

export default HomeBanner;