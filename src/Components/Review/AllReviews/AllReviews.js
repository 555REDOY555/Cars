import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import BTN from '../BTN';

const AllReviews = () => {
     const { user } = useAuth()
     const [Review, setReview] = useState([]);

     useEffect(() => {
          fetch(`https://guarded-crag-51137.herokuapp.com/Review`)
               .then(res => res.json())
               .then(data => {
                    setReview(data);
               });
     }, [])
     return (

          <div>

               <div className="">
                    <BTN></BTN>
               </div>

               <div>
                    <div className="mt-5">
                         <h1 className="text-center mt-5" >Reviews : {Review.length}</h1>

                         <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                              {
                                   Review.map((Review) => <div className="col-md-6 col-12">



                                        <div className="card border border-3   ">

                                             <div className="card-body">
                                                  <h4 className="card-title">{Review?.name} says </h4>
                                                  <h5 className="card-text text-primary mt-5 ">{Review?.Review}</h5>
                                                  <p  ></p>

                                             </div>
                                        </div>
                                   </div>)
                              }

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AllReviews;