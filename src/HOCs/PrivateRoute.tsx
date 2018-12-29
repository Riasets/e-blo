import * as React from 'react';
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, auth, otherPath, ...rest }: any) => {
  const check = (props: any) => (
    auth
      ? <Component {...props}/>
      : <Redirect to={otherPath}/>

  );
  return(<Route {...rest} render={check}/>);
};

export default PrivateRoute;
