import React from "react";
import { Navigate, RouteProps } from "react-router";
import auth from "../../auth";

const PrivateRouter = ({ children }: RouteProps) => {
  if (!auth()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )

};

export default PrivateRouter