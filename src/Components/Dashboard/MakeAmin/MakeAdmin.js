import { TextField } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';


const MakeAdmin = () => {
     const [email, setEmail] = useState('');
     const [success, setSuccess] = useState(false);
     const { token } = useAuth();

     const handleOnBlur = e => {
          setEmail(e.target.value);
     }
     const handleAdminSubmit = e => {
          const user = { email };
          fetch('https://guarded-crag-51137.herokuapp.com/users/admin', {
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
          <div className='mb-5' >
               <h2>Make an Admin</h2>
               <form className='pb-5' onSubmit={handleAdminSubmit}>
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