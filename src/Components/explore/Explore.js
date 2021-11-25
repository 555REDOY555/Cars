import React, { useEffect, useState } from 'react';
import AllExplore from './AllExplore/AllExplore';

const Explore = () => {
     const [explore, setexplore] = useState([])



     useEffect(() => {
          fetch(`https://guarded-crag-51137.herokuapp.com/cars`)
               .then(res => res.json())
               .then(data => {
                    setexplore(data);
               });
     }, [])

     return (
          <div>
               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5">
                    {
                         explore.map(explore => <AllExplore explore={explore} ></AllExplore>)
                    }
               </div>
          </div>
     );
};

export default Explore;