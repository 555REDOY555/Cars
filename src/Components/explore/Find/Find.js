import React, { useEffect, useState } from 'react';

const Find = () => {
     const [cars, setCars] = useState([])



     useEffect(() => {
          fetch(`http://localhost:5000/cars`)
               .then(res => res.json())
               .then(data => {
                    setCars(data.slice(0, 6));
               });
     }, [])

     return (
          <div>

          </div>
     );
};

export default Find;