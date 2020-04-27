import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>I'M HUNGRY</h1>
      <img
        src="https://i.giphy.com/pBj0EoGSYjGms.gif"
        alt="Audrey II wants to eat."
      />
      <h3>Snack options</h3>
      <ul>
        <li>
          <Link to='/cheese-and-crackers' >Cheese and Crackers</Link>
        </li>
        <li>
          <Link to='/grapes' >Grapes</Link>
        </li>
        <li>
          <Link to='/mixed-nuts' >Mixed Nuts</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
