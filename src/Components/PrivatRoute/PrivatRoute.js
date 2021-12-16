import React from 'react';
import { Redirect, Route } from 'react-router';

import useFirebase from '../hook/useFirebase';

const PrivatRoute = ({ children, ...rest }) => {

     const { user, loading } = useFirebase();
     if (loading) return 'loading';
     return (
          <Route
               {...rest}
               render={({ location }) => user.email ? children : <Redirect
                    to={{
                         pathname: "/login",
                         state: { from: location }
                    }}
               ></Redirect>}
          >

          </Route>
     );

};

export default PrivatRoute;