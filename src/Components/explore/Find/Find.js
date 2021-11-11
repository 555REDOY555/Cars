import React, { useEffect, useState } from 'react';

const Find = () => {
     const [cars, setCars] = useState([])



     useEffect(() => {
          fetch(`https://vast-hamlet-14167.herokuapp.com/cars`)
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