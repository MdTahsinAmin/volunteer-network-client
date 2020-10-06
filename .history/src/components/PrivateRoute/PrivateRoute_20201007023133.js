import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { VolunteersContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

  
    const [volunteer,setVolunteers] = useContext(VolunteersContext);


    return (
        <Route
      {...rest}
      render={({ location }) =>
        volunteer.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;