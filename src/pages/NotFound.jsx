import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Oops!</h1> <br />
        <p>Sorry, an unexpected error has occurred.</p> <br />
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
