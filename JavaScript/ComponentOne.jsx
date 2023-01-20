import React from "react";

let matriz = { firstname: "demo", lastname: "demo", dni: 1234 };

const ComponentOne = () => {
  return (
    <div>
      <li>{matriz.firstname}</li>
      <li>{matriz.lastname}</li>
      <li>{matriz.dni}</li>
    </div>
  );
};

export default ComponentOne;
