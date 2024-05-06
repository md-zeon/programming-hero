import React from "react";

function Friend({friend}) {
    const {name,username, email, address} = friend;
    const {street, suite, city, zipcode} = address;
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "15px",
        padding: "15px",
        margin: "15px",
      }}
    >
      <h4>Name: {name}</h4>
      <h4>Username: {username}</h4>
      <h4>Email: {email}</h4>
      <h4>Address: {street + " " +  suite + " " + city}</h4>
      <h4>ZipCode: {zipcode}</h4>
    </div>
  );
}

export default Friend;
