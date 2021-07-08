
import './App.css';
import { About_Us } from './About_Us';
import { Serv } from './Body';
import { Services } from './Services';
import { Voitures } from './Body'
import { Cars } from './Cars';
import { Chauffeurs } from './Drivers';
import { Booking } from './Booking';
import { Contact } from './Contact';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Live } from './live_It';
import logo from "./images/logo.png";
import cles from "./images/cle.png";



const Home = () => {
  return (
    <div className='home'>
      <img src= {logo} />
      <h1 className="titre">Windsor Premium Services</h1>
      <h2 className="titre2">Private Travel & Premium Concierge</h2>
      <h3 >Phone 24h/24: +337-674-424-18</h3>
      <h3>E-mail: windsorpremiumservices@wps.com</h3>
      <br />
      <br />

      <li>< img src= {cles} width='150px' height='100px' /></li>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Home />
      <About_Us />
      <Serv />
      <Voitures />
      <Chauffeurs />
      <Booking />
      <Contact />
    </div>
  );
}
function Routes() {
  return (
    <Router>
      <div className='Menu'>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/About_Us">About Us</Link>
        </span>
        <span>
          <Link to="/Services">Our Services</Link>
        </span>
        <span>
          <Link to="/Cars">Our Cars</Link>
        </span>
        <span>
          <Link to="/Drivers">Our Drivers</Link>
        </span>
        <span>
          <Link to="/live_It">Live it</Link>
        </span>
        <span>
          <Link to="/Booking">To Book</Link>
        </span>
        <span>
          <Link to="/Contact">To Contact Us</Link>
        </span>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About_Us">
            <About_Us />
          </Route>
          <Route path="/Services">
            <Serv />
          </Route>
          <Route path="/Cars">
            <Voitures />
          </Route>
          <Route path="/Drivers">
            <Chauffeurs />
          </Route>
          <Route path="/Live_It">
            <Live />
          </Route>
          <Route path="/Booking">
            <Booking />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Accueil() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About Us</h2>;
}
function OurServices() {
  return <h2>Services</h2>;
}
function OurCars() {
  return <h2>Cars</h2>;
}
function OurDrivers() {
  return <h2>Drivers</h2>;
}
function ToLive() {
  return <h2>Live it</h2>;
}
function ToBook() {
  return <h2>Booking</h2>;
}
function ToContact() {
  return <h2>To Contact Us</h2>;
}

export default Routes;
// export default App;
