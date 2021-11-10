import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
     const auth = getAuth();
     const history = useHistory();
     const location = useLocation();
     const [error, setError] = useState('');
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const redirect_uri = location.state?.from || '/';

     const handleEmailChange = e => {
          setEmail(e.target.value)
     }
     const handlePasswordChange = e => {
          if (e.target.value < 6) {

          }

          setPassword(e.target.value)
     }



     const handleRegistration = (e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    // Verify(email)
                    console.log(result.user)
                    history.push(redirect_uri);
               })
               .catch((error) => {
                    setError(error.message);
                    // ..
               });
     }


     const Verify = (email) => {
          sendEmailVerification(auth, email)
               .then(() => {

               });

     }



     return (
          <div>
               <h1 className='text-center' >Register</h1>
               <Form onSubmit={handleRegistration} className="m-5" >

                    <div className="row mb-3 ">
                         <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                         <div className="col-sm-10">
                              <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                         </div>
                    </div>
                    <div className="row mb-3">
                         <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                         <div className="col-sm-10">
                              <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                              <div className=" text-danger">
                                   {error}
                              </div>
                         </div>
                    </div>
                    <div className="row mb-3">
                         <div className="col-sm-10 offset-sm-2">
                              <div className="form-check">
                                   <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                   <label className="form-check-label" htmlFor="gridCheck1">
                                        tarms and condison
                                   </label>
                              </div>
                         </div>

                    </div>
                    <button type="submit" className="btn btn-warning">Registar</button>
                    <p className="text-center" >Already user <Link to="/login" >Log-In</Link></p>


               </Form>
               {/* <div className="text-center">
                    <Button onClick={handelGoogleLogIn} className="btn btn-warning text-center " >Sign With Google</Button>
                    <Button onClick={handleGitHubLogIn} className="btn btn-warning text-center ms-3 " >Sign With GitHub</Button>
               </div> */}
          </div>

     );
};

export default Register;