import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';

const ExtraHome = () => {
     return (
          <div>
               <div className="row margin g-0 mb-5 ">
                    <div className="col-md-6 col-12  pb-3 mt-5 bg-info ">
                         <Container>
                              <h1 className="ms-5 mt-5" >
                                   Corporate governance
                              </h1>
                              <h5 className="ms-5 mt-5">
                                   As a not-for-profit company, committed to transparency in all that we do, we recognise the importance of sharing details of our company reports and structures.
                              </h5>

                              <Button className="btn  text-white ms-5 mt-5 pb-1  " >Find more</Button>
                         </Container>
                    </div>
                    <div className="col-md-6 pb-3 col-12 text-white bg-secondary mt-5 ms-0">
                         <Container className='mb-5' >
                              <h1 className="ms-5 mt-5" >
                                   Large companies (250 or more employees)
                              </h1>
                              <h5 className="ms-5 mt-5">
                                   Private service schemes built from the ground up to fulfil your specific needs, where you define the scheme benefits and administration protocols.
                              </h5>

                              <Button className="btn  text-white ms-5 mt-5 pb-1  " >Find more</Button>
                         </Container>


                    </div>
               </div>
               <div className="mt-5 margin-2">
                    <h1 className="mt-5 mb-5" >Commitment to providing the very best service to you</h1>
               </div>
               <div className="row">
                    <div className="col-md-6 col-12 border-end border-dark ">
                         <h4>
                              Award winning
                         </h4>
                         <p className="mt-3 mb-5" >

                              When we win an award, we are proud. The recognition adds validity to everything we strive to achieve for our members. We’ve won numerous consumer awards over the years – below are some of the more recent ones.
                         </p>
                         <div className="row mt-4 mb-5">
                              <div className="col-md-4 col-12  ">
                                   <img className="ms-5" width="200px" src="https://www.wpa.org.uk/_nuxt/img/moneyfacts-awards2021.2e610af.svg" alt="" />
                              </div>
                              <div className="col-md-4 col-12 ">
                                   <img className="ms-5" width="200px" src="https://www.wpa.org.uk/_nuxt/img/moneyfacts-awards2021.2e610af.svg" alt="" />
                              </div>
                              <div className="col-md-4 col-12 ">
                                   <img className="ms-5" width="200px" src="https://www.wpa.org.uk/_nuxt/img/ILP20WIN-multi-healthcashprv.9e040fd.svg" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
export default ExtraHome;