import * as React from 'react';
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, auth, otherPath, history, ...rest }: any) => {
  const check = (props: any) => (
    auth
      ? <Component {...props}/>
      : <Redirect to = {{
        pathname: otherPath,
        state: { from: props.location },
      }}/>

  );

  /*if (!auth) {
    history.push(otherPath);
  }*/
  return(<Route {...rest} render={check}/>);
};

export default PrivateRoute;
