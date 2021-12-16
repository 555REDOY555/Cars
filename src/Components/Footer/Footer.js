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
                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">How We works</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Newsroom</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Investors</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">HotelTonight</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Airbnb for Work</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Made possible by Hosts</a>

                         </div>
                         <div className="col-md-4 col-6">

                              <h5>COMMUNITY</h5>
                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Diversity & Belonging</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Against Discrimination</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Accessibility</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Airbnb Associates</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Host Afghan refugees</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Guest Referrals</a>

                         </div>
                         <div className="col-md-4 col-6">

                              <h5>HOST</h5>
                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Host your home</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Host an Online Experience</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Host an Experience</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Responsible hosting</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Resource Center</a>

                              <a className="text-decoretor" href="https://cars-a30a7.web.app/">Community Center</a>

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