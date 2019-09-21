import React from "react";
import "./weather-details.sass";

export default ({ time, temperature, unit, condition }) => {
  return (
    <ul>
      <li>{time}</li>
      <li>
        {temperature} {unit}
      </li>
      <li>{condition}</li>
    </ul>
  );
};
