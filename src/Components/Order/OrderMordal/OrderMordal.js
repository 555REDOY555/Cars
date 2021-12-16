
import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';

import './OrderMoradl.css'

const OrderMordal = () => {
     const { id } = useParams();
     const { user } = useAuth()
     const [ setOrder] = useState()
     const { register, reset, handleSubmit, formState: { errors } } = useForm();
     useEffect(() => {

          fetch(`https://guarded-crag-51137.herokuapp.com/Cars/${id}`)
               .then(res => res.json())
               .then(data => setOrder(data))

     }, )



     const onSubmit = data => {

          fetch(`https://guarded-crag-51137.herokuapp.com/order`, {
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
                                   <input placeholder='name' defaultValue={user.displayName} {...register("name")} />

                                   <input defaultValue={user.email} {...register("email", { required: true })} />
                                   <input defaultValue={id} {...register("service",)} />
                                   {errors.email && <span className="error">This field is required</span>}
                                   <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                                   <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                                   <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                                   <input placeholder="" defaultValue="Painding" {...register("process", { required: true })} />

                                   <input type="submit" />
                              </form>
                         </div>
                         <div className="col-md-6">
                              <img src="https://bpcdn.co/images/2016/05/pre-school-order.png" alt="" />
                         </div>
                    </div>

               </Container>

          </div>
     );
};

export default OrderMordal;