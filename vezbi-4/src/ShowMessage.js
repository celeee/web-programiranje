import React from "react";

function ShowMessage({ name, message }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Message: {message}</h1>
    </div>
  );
}

export default ShowMessage;
