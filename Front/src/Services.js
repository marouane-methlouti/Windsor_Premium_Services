
import serv1 from "./images/service1.jpg";
import serv2 from "./images/service2.jpg";
import serv3 from "./images/service3.jpg";
import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";
export const Services = (props) => {
  console.log(props)
  return (
    <div className = "services">
      <img src= {couronne} width='200px'height='150px'/>
      <h2>Services</h2>
      <h4>We guarantee you the best service</h4>
      <ul>
        {props.list_2.map((item) =>
          <li>{item}</li>)}
          <br/>
        
            <img src= {serv1} width='600px'/><br/>            
            <img src= {serv2} width='600px'/> <br/>
            <img src= {serv3} width='600px' />
            <br/>
            <br/>


                    <hr/>
          <li>< img src= {cles} width='150px'height='100px'/></li>
      </ul>
      {/* <img src= {chauffeur} width="500px"/> */}
    </div>
  )
};