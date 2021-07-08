import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";
import driv3 from "./images/driver3.jpg";
import driv1 from "./images/driver1.jpg";
import driv2 from "./images/driver2.jpg";
export const Chauffeurs = () => {
    return (
        <div className = "drivers">
          <img src= {couronne} width='200px'height='150px'/>
            <h2>Drivers</h2>
            <h4>They are very professional</h4>
            <ul>
            <li>Ponctuals,</li>
            <li>Discreets,</li>
            <li>Suits and ties,</li>
            <li>At your service.</li>
            <br/>
            <img src= {driv3} width='800px'/><br/>            
            <img src= {driv1} width='800px'/> <br/>
            <img src= {driv2} width='800px' />
            </ul>
            <br/>

          <hr/>

          <li>< img src= {cles} width='150px'height='100px'/></li>
        </div>
    )
};
