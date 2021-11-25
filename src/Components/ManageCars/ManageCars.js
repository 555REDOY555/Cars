import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const ManageCars = () => {
     const [Car, setCar] = useState([])
     const { user } = useAuth()
     const [users, setUsers] = useState([]);

     useEffect(() => {
          fetch(`https://guarded-crag-51137.herokuapp.com/Cars`)
               .then(res => res.json())
               .then(data => {
                    setCar(data);
               });
     }, [])

     const handleDeleteUser = id => {
          const proceed = window.confirm('Are you sure, you want to delete?');
          if (proceed) {
               const url = `https://guarded-crag-51137.herokuapp.com/Cars/${id}`;
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
                         Car.map((Car) => <div className="card border border-4  ">

                              <div className="card-body">
                                   <h5 className="card-title"> NAME : {Car?.name}</h5>
                                   <p className="card-text text-primary "></p>
                                   <h2 className="text-primary mb-3 " >
                                        CAR ID :  {Car?._id}
                                   </h2>
                                   <p> BODY TYPE: {Car?.BodyType}</p>
                                   <Link to='' ><Button onClick={() => handleDeleteUser(Car._id)} className="btn btn-warning text-center " >DELETE</Button></Link>
                              </div>
                         </div>)
                    }

               </div>
          </div>
     );
};

export default ManageCars;