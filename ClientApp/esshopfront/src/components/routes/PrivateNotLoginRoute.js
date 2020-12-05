import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../utils/Utils";

const PrivateNotLoginRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateNotLoginRoute;
