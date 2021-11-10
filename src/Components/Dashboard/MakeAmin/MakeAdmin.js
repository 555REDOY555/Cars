import { TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import useFirebase from '../../hook/useFirebase';

const MakeAdmin = () => {
     const [email, setEmail] = useState('');
     const { token } = useAuth();
     const [success, setSuccess] = useState(false);
     const handleOnBlur = e => {
          setEmail(e.target.value);
     }
     const handleAdminSubmit = e => {
          const user = { email };
          fetch('http://localhost:5000/users/admin', {
               method: 'PUT',
               headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         console.log(data);
                         setSuccess(true);
                    }
               })

          e.preventDefault()
     }

     return (
          <div>
               <h2>Make an Admin</h2>
               <form onSubmit={handleAdminSubmit}>
                    <TextField
                         sx={{ width: '50%' }}
                         label="Email"
                         type="email"
                         onBlur={handleOnBlur}
                         variant="standard" />
                    <Button type="submit" className='btn btn-warning' >Make Admin</Button>
               </form>
               {success && <Alert severity="success">Admin make success</Alert>}
          </div>
     );
};

export default MakeAdmin;