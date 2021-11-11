import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
     return (
          <div className="margin" >
               <Container>
                    <div className="row container  ">
                         <div className="col-md-4 col-6 ">

                              <h5>About</h5>
                              <a className="text-decoretor" href="">How We works</a>

                              <a className="text-decoretor" href="">Newsroom</a>

                              <a className="text-decoretor" href="">Investors</a>

                              <a className="text-decoretor" href="">HotelTonight</a>

                              <a className="text-decoretor" href="">Airbnb for Work</a>

                              <a className="text-decoretor" href="">Made possible by Hosts</a>

                         </div>
                         <div className="col-md-4 col-6">

                              <h5>COMMUNITY</h5>
                              <a className="text-decoretor" href="">Diversity & Belonging</a>

                              <a className="text-decoretor" href="">Against Discrimination</a>

                              <a className="text-decoretor" href="">Accessibility</a>

                              <a className="text-decoretor" href="">Airbnb Associates</a>

                              <a className="text-decoretor" href="">Host Afghan refugees</a>

                              <a className="text-decoretor" href="">Guest Referrals</a>

                         </div>
                         <div className="col-md-4 col-6">

                              <h5>HOST</h5>
                              <a className="text-decoretor" href="">Host your home</a>

                              <a className="text-decoretor" href="">Host an Online Experience</a>

                              <a className="text-decoretor" href="">Host an Experience</a>

                              <a className="text-decoretor" href="">Responsible hosting</a>

                              <a className="text-decoretor" href="">Resource Center</a>

                              <a className="text-decoretor" href="">Community Center</a>

                         </div>

                         <hr className="mt-5" />
                         <div className="d-flex  justify-content-between">
                              <div className="">
                                   <p>© 2021 Airbnb, Inc.·Privacy·Terms·Sitemap</p>
                              </div>
                              <div className="">
                                   <p>English (US)
                                        Choose a currency
                                        $
                                        USD</p>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Footer;