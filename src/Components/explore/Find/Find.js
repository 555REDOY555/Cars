import React, { useEffect, useState } from 'react';

const Find = () => {
     const [, setCars] = useState([])



     useEffect(() => {
          fetch(`https://vast-hamlet-14167.herokuapp.com/cars`)
               .then(res => res.json())
               .then(data => {
                    setCars(data.slice(0, 6));
               });
     }, [])

     return (
          <div>
                    <h1>hi</h1>
          </div>
     );
};

export default Find;