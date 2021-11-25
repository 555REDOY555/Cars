import React, { useEffect, useState } from 'react';
import AllCar from './Car/AllCar';

const Cars = () => {
     const [cars, setCars] = useState([])



     useEffect(() => {
          fetch(`https://guarded-crag-51137.herokuapp.com/cars`)
               .then(res => res.json())
               .then(data => {
                    setCars(data.slice(0, 6));
               });
     }, [])

     // console.log(servises)
     return (
          <div>
               <div>
                    <h1 className="text-center my-4 text-primary " >Cars</h1>
               </div>
               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5">
                    {
                         cars.map(Car => <AllCar car={Car} ></AllCar>)
                    }
               </div>
          </div>
     );
};

export default Cars;