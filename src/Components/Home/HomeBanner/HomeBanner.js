import React from 'react';
import { Card } from 'react-bootstrap';

const HomeBanner = () => {
     return (
          <div>
               <Card className="bg-dark text-white">
                    <Card.Img src='https://www.autosbangla.com/images/slider/slider-img1.jpg' alt="Card image" />
                    <Card.ImgOverlay>
                         <Card.Title></Card.Title>
                         <Card.Text>

                         </Card.Text>
                         <Card.Text></Card.Text>
                    </Card.ImgOverlay>
               </Card>
          </div>
     );
};

export default HomeBanner;