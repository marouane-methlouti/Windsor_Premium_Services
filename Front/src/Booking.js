import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const Calendrier = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)

  function handleSubmit(event) {
    event.preventDefault();

    const options = {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: value
      }),
    }

    fetch("http://localhost:3000/routeDate", options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      });
  }

  return (
    <div className="calend">
      <Calendar
        onChange={onChange}
        value={value}
      />
      <br/>
      {/* <span>{value.toString()}</span> */}
      <button onClick={handleSubmit}> Send </button>

    </div>
  );
}
export const Booking = () => {

  return (
    <div className="booking">
      <img src={couronne} width='200px' height='150px' />
      <h2>Prices and Booking</h2>
      <p>Don't hesitate to contact us for a price and to book.</p>
      <Calendrier />
      <br />
      <br />
      <br />
      <hr />
      <li>< img src={cles} width='150px' height='100px' /></li>
    </div>
  )
}


