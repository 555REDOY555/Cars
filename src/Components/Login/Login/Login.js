import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebaseinit';
import { Col, Form, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../hook/useAuth';



initializeAuthentication()


const Login = () => {
     const auth = getAuth();
     const { signInUsingGoogle } = useAuth();


     const history = useHistory()
     const location = useLocation()
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


     const logIn = (e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
               .then((result) => {
                    console.log(result.user)

                    history.push(redirect_uri);
               })
               .catch((error) => {
                    setError(error.message);
                    // .. 
               });
     }


     const handleGoogleLogin = () => {
          signInUsingGoogle()
               .then(result => {
                    const user = result.user;
                    SaveUserGoogle(user.email, user.displayName)
                    history.push(redirect_uri);
               })
     }

     const SaveUserGoogle = (email, displayName) => {
          const user = { email, displayName };
          fetch('https://guarded-crag-51137.herokuapp.com/users', {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then()

     }

     return (
          <div>
               <h1 className='text-center' >LOGIN</h1>
               <Form onSubmit={logIn} className="mx-5 mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                         <Form.Label column sm={2}>
                              Email
                         </Form.Label>
                         <Col sm={10}>
                              <Form.Control onBlur={handleEmailChange} type="email" placeholder="Email" required />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                         <Form.Label column sm={2}>
                              Password
                         </Form.Label>
                         <Col sm={10}>
                              <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                              <p className="text-danger" >{error}</p>
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                         <Col sm={{ span: 10, offset: 2 }}>
                              <Form.Check label="Remember me" />
                         </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                         <Col sm={{ span: 10, offset: 2 }}>
                              <Button className="btn-warning" type="submit">Sign in</Button>
                         </Col>
                    </Form.Group>
               </Form>

               <p className="text-center" >Are you new here <Link to="/register" >Create account</Link></p>
               <div className="text-center">
                    <div className="text-center">
                         <Button onClick={handleGoogleLogin} className="btn btn-warning text-center " >Sign With Google</Button>

                    </div>
               </div>
          </div>
     );
};

export default Login;