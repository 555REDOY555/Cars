import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import useFirebase from '../hook/useFirebase';

const MyOders = () => {
     const { user } = useAuth()
     const [orders, setOrders] = useState([]);
     const [users, setUsers] = useState([]);
     const [services, setServices] = useState([])


     const email = user.email;


     useEffect(() => {
          fetch(`https://vast-hamlet-14167.herokuapp.com/myOrders/${email}`)
               .then((res) => res.json())
               .then((data) => setServices(data));
     }, [email]);
     console.log(orders);

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

               <div>


                    <h1 className="text-center" >Order : {services.length}</h1>

                    <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                         {
                              services.map((service) => <div className="">



                                   <div className="card    ">

                                        <div className="card-body">
                                             <h5 className="card-title">{service?.name}</h5>
                                             <p className="card-text text-primary "></p>
                                             <h2 className="text-primary mb-3 " >Order ID
                                                  :
                                                  {service?.service
                                                  }
                                             </h2>
                                             <p>{service?.phone}</p>
                                             <Link to='' ><Button onClick={() => handleDeleteUser(service._id)} className="btn btn-warning text-center " >Cancel order </Button></Link>
                                        </div>
                                   </div>
                              </div>)
                         }

                    </div>
               </div>
          </div>
     );
};

export default MyOders;