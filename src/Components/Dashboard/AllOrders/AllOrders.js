import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const AllOrders = () => {
     const [Order, setOrder] = useState([])
     const { user } = useAuth()
     const [users, setUsers] = useState([]);





     useEffect(() => {
          fetch(`https://vast-hamlet-14167.herokuapp.com/order`)
               .then(res => res.json())
               .then(data => {
                    setOrder(data);
               });
     }, [])
     const handleDeleteUser = id => {
          const proceed = window.confirm('Are you sure, you want to delete?');
          if (proceed) {
               const url = `https://vast-hamlet-14167.herokuapp.com/order/${id}`;
               fetch(url, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('deleted successfully');
                              const remainingUsers = users.filter(user => user._id !== id);
                              setUsers(remainingUsers);
                         }
                    });
          }
     }
     return (
          <div>
               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                    {
                         Order.map((order) => <div className="card    ">

                              <div className="card-body">
                                   <h5 className="card-title"> NAME : {order?.name}</h5>
                                   <p className="card-text text-primary "></p>
                                   <h2 className="text-primary mb-3 " >
                                        CAR ID :  {order?._id}
                                   </h2>
                                   <p> PHONE: {order?.phone}</p>
                                   <Link to='' ><Button onClick={() => handleDeleteUser(order._id)} className="btn btn-warning text-center " >DELETE</Button></Link>
                              </div>
                         </div>)
                    }

               </div>
          </div>
     );
};

export default AllOrders;