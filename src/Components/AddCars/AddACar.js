import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddACar.css'

const AddACar = () => {
     const { register, reset, handleSubmit, formState: { errors } } = useForm();
     const onSubmit = data => {

          fetch(`https://guarded-crag-51137.herokuapp.com/cars`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)

          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         alert('Added Successfuly')
                         reset()
                    }
               })

          console.log(data)
     };
     return (
          <div className='bg' >
               <Container>
                    <div className="row">
                         <div className="col-md-6 col-12 ">
                              <form className=" add-form " onSubmit={handleSubmit(onSubmit)}>
                                   {/* register your input into the hook by invoking the "register" function */}
                                   <input placeholder="name"  {...register("name")} />

                                   {/* include validation with required or other standard HTML validation rules */}
                                   <input placeholder="price" {...register("price", { required: true })} />
                                   <input placeholder="desciption" {...register("description", { required: true })} />
                                   <input placeholder="img" {...register("img", { required: true })} />
                                   <input type="number" placeholder="Speed" {...register("TopSpeed", { required: true })} />
                                   <input placeholder="Fuel" {...register("Fuel", { required: true })} />
                                   <input placeholder="Body type" {...register("BodyType", { required: true })} />
                                   <br />
                                   {/* errors will return when field validation fails  */}
                                   {errors.exampleRequired && <span>This field is required</span>}

                                   <input className="ms-5 my-4 btn btn-danger" type="submit" />
                              </form>
                         </div>
                         <div className="col-md-6 col-12 ">
                              <img className='w-100' src="https://image.freepik.com/free-vector/city-driver-concept-illustration_114360-1209.jpg" alt="" />
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default AddACar;