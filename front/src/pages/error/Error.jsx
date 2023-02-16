import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  function MyErrorElement() {
    let error: any = useRouteError();
    
    if (isRouteErrorResponse(error)) {
      return <p>{error.status} {error.statusText}</p>
    }
  
    return <p>{error.message || "Unknown Error"}</p>
  }

  return (
    <div className="App">
    <header className="App-header">
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i><MyErrorElement /></i>
      </p>
    </div>
    </header>
    </div>
  );
}