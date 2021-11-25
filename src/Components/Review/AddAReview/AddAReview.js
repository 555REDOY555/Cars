import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';

const AddAReview = () => {
     const { id } = useParams();
     const { user } = useAuth()
     const [order, setOrder] = useState()
     const { register, reset, handleSubmit, formState: { errors } } = useForm();




     const onSubmit = data => {

          fetch(`https://guarded-crag-51137.herokuapp.com/Review`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)

          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         alert('Order Successfuly')
                         reset()
                    }
               })

          console.log(data)
     };


     return (
          <div>


               <Container>
                    <div className="row">
                         <div className="col-md-6 col-12 ">
                              <h1>Full the form for order</h1>

                              <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                                   <input placeholder='Your name' defaultValue={user.displayName} {...register("name")} />

                                   <input defaultValue={user.email} {...register("email", { required: true })} />

                                   {errors.email && <span className="error">This field is required</span>}

                                   <input style={{ padding: "40px" }} type='text' placeholder="Review" defaultValue="" {...register("Review", { required: true })} />


                                   <input type="submit" />
                              </form>
                         </div>
                         <div className="col-md-6 col-12">
                              <img className='w-100 ' src="https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18630.jpg?size=626&ext=jpg" alt="" />
                         </div>
                    </div>

               </Container>

          </div>
     );
};

export default AddAReview;