import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";

import Karousel from './carousel';

export const Live = () => {
    return (
      <div className = "live">
        
        <img src= {couronne} width='200px'height='150px'/>
        <h2>With us</h2>
<Karousel />


            <hr/>        
          <li>< img src= {cles} width='150px'height='100px'/></li>
      </div>
    )
  }
