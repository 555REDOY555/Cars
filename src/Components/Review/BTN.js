import React from 'react';
import { Link } from 'react-router-dom';

const BTN = () => {
     return (
          <div>
               <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                         <div className="d-flex align-items-center mb-5">
                              <h1 className='text-primary' >Do you wanna to  give us a review  </h1>
                              <h1 className='ms-4' ><i class="fas fa-hand-point-right"></i></h1>
                              <Link to='addreview' >
                                   <button className='btn btn-warning  ms-3' >
                                        Add a review
                                   </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default BTN;