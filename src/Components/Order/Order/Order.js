import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import OrderMordal from '../OrderMordal/OrderMordal';

const Order = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState([])







     useEffect(() => {
          fetch(`http://localhost:5000/cars/${id}`)
               .then(res => res.json())
               .then(data => setBooking(data))

     }, [])
     console.log(id)

     // console.log(Order)

     return (

          <div>
               <div className="row">
                    <div className="">
                         <div className="card    ">
                              <img src={booking.img} className="card-img-top img-fluid  " alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">{booking.name}</h5>
                                   <p className="card-text text-primary ">{booking.description}</p>
                                   <h2 className=" mb-3 " >
                                        Price: {booking.price}
                                   </h2>
                                   <h2 className=" mb-3 " >
                                        Top-Speed :  {booking.TopSpeed} MPH
                                   </h2>
                                   <h2 className=" mb-3 " >
                                        Fuel:  {booking.Fuel}
                                   </h2>
                                   <h2 className=" mb-3 " >
                                        Body-Type:  {booking.BodyType}
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
          </div>);
};

export default Order;