import React, { useEffect, useState } from 'react';
import AllCar from './Car/AllCar';

const Cars = () => {
     const [cars, setCars] = useState([])



     useEffect(() => {
          fetch(`http://localhost:5000/cars`)
               .then(res => res.json())
               .then(data => {
                    setCars(data);
               });
     }, [])

     // console.log(servises)
     return (
          <div>
               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5">
                    {
                         cars.map(Car => <AllCar car={Car} ></AllCar>)
                    }
               </div>
          </div>
     );
};

export default Cars;