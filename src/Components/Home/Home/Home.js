import React from 'react';
import Cars from '../../Header/Cars/Cars';
import ExtraHome from '../ExtraHome/ExtraHome';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
     return (
          <div>
               <HomeBanner></HomeBanner>
               <Cars></Cars>
               <ExtraHome></ExtraHome>
          </div>
     );
};

export default Home;