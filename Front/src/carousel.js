import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/carousel';
import car from "./images/car.jpg";
import heli from "./images/helicoptere.jpg"
import yacht from "./images/yacht.png"
import champagne from "./images/champagne.webp"



    export const Karousel = () => {
    return (
      <div style={{ display: 'block', width: 900, padding: 30 }}>
        <h4>Enjoy of your next experience with Windsor Premium Services</h4>
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
              src= {car}
              alt="Image One"
            />
            <Carousel.Caption>
              {/* <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
            src= {heli} height="400px"
              alt="Image Two"
            />
            <Carousel.Caption>
              {/* <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
            src= {yacht} 
              alt="Image Thre"
            />
            <Carousel.Caption>
              {/* <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100"
            src= {champagne} 
              alt="Image Four"
            />
            <Carousel.Caption>
              {/* <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  export default Karousel;