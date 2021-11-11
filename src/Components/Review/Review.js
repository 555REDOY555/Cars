import React from 'react';
import AddAReview from './AddAReview/AddAReview';
import AllReviews from './AllReviews/AllReviews';

const Review = () => {
     return (
          <div>
               <div className="row">
                    <div className="col-md-12">

                         <AllReviews></AllReviews>
                    </div>
               </div>
          </div>
     );
};

export default Review;