import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const AllExplore = ({ explore }) => {
     const { _id, name, price, img, description } = explore;
     return (
          <div>
               <div className="col hover-card ">

                    <div className="card shadow p-3 mb-5 bg-body rounded   ">
                         <img src={img} className="card-img-top img-fluid  " alt="..." />
                         <div className="card-body">
                              <h5 className="card-title">{name}</h5>
                              <p className="card-text text-primary ">{description.slice(0, 200)}</p>
                              <h2 className="text-primary mb-3 " >
                                   {price}
                              </h2>
                              <Link to={`/order/${_id}`} ><Button className="btn btn-warning" >Book</Button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllExplore;