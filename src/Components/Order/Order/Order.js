import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import OrderMordal from '../OrderMordal/OrderMordal';

const Order = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState([])







     useEffect(() => {
          fetch(`https://vast-hamlet-14167.herokuapp.com/cars/${id}`)
               .then(res => res.json())
               .then(data => setBooking(data))

     }, [])
     console.log(id)

     // console.log(Order)

     return (

          <div>
               <Container className='my-5'>
                    <div className="row">
                         <div className="border border-4">
                              <div className="card     ">
                                   <img src={booking.img} className="card-img-top img-fluid  " alt="..." />
                                   <div className="card-body">
                                        <h5 className="card-title">{booking.name}</h5>
                                        <p className="card-text text-primary ">{booking.description}</p>
                                        <h2 className=" mb-3  " >
                                             <span className='text-success' >Price</span> : <span className='text-secondary' >{booking.price}</span>
                                        </h2>
                                        <h2 className=" mb-3  " >
                                             <span className='text-success' >Top-Speed</span> :  <span className='text-secondary' >{booking.TopSpeed}</span> MPH
                                        </h2>
                                        <h2 className=" mb-3 " >
                                             <span className='text-success' >Fuel</span>:  <span className='text-secondary' >{booking.Fuel}</span>
                                        </h2>
                                        <h2 className=" mb-3 " >
                                             <span className='text-success' >Body-Type</span>:  <span className='text-secondary' >{booking.BodyType}</span>
                                        </h2>
                                        <Link to={`/OrderMordal/${booking._id}`} >

                                             <Button className="btn btn-warning" >
                                                  Order now
                                             </Button>
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>);
};

export default Order;