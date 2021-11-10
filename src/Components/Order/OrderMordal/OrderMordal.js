import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../hook/useFirebase';

const OrderMordal = () => {
     const { id } = useParams();
     const { user } = useFirebase()
     const [order, setOrder] = useState()
     const { register, reset, handleSubmit, formState: { errors } } = useForm();
     useEffect(() => {

          fetch(`http://localhost:5000/Cars/${id}`)
               .then(res => res.json())
               .then(data => setOrder(data))

     }, [])



     const onSubmit = data => {

          fetch(`http://localhost:5000/order`, {
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
               <h1>Full the form for order</h1>


               <Container>
                    <form className="shipping-form d-flex " onSubmit={handleSubmit(onSubmit)}>

                         <input placeholder='your name' {...register("name")} />

                         <input defaultValue={user.email} {...register("email", { required: true })} />
                         <input defaultValue={id} {...register("service",)} />
                         {errors.email && <span className="error">This field is required</span>}
                         <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                         <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                         <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                         <input type="submit" />
                    </form>
               </Container>

          </div>
     );
};

export default OrderMordal;