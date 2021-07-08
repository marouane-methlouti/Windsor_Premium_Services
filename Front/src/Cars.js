import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";
import car from "./images/car.jpg";
import voitures from "./images/voitures.jpg";
import merco from "./images/merco.jpg";



export const Cars = (props) => {
  return (
    <div className ="car">
        <img src= {couronne} width='200px'height='150px'/>
      <h2>Cars</h2>
      <h4>We offer you only a luxury cars</h4>
      <ul>
      {props.list_1.map((item) =>
        <li>{item}</li>)}
    </ul>
      <img src = {car} width="800px" /><br/>
       <img src = {voitures} width="800px" /><br/>
       <img src = {merco} width="800px" />
       <br/>
          <br/>
          <hr/>
          <li>< img src= {cles} width='150px'height='100px'/></li>
    </div>
    
  )
};
// import voiture from './images/car.jpg';
// import voitures from './images/cars.jpg';
