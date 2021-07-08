import couronne from "./images/couronnewps.png";
import cles from "./images/cle.png";

// import Karousel from './carousel';

export const About_Us = () => {
    return (
      <div className = "about">
        {/* <Karousel /> */}
        <img src= {couronne} width='200px'height='150px'/>
        <h2>About Us</h2>
        <p>Windsor Premium Services is a company specialist in transport of VIP, <br/>
          evenements organizer and prestige consierge in the French Riviera. <br/>
          We transport you anywhere in Europe and USA. <br/>
          We are committed to respecting and preserving the privacy of our customers.<br/>
          We are partners with the management of the French Riviera to offer you the best discoveries.</p>
          <a href=' https://cotedazurfrance.fr/' target="_blank"> Click to discover an overview of your visit.</a>
          <br/>
          <br/>

          <iframe width="900" height="506" src="https://www.youtube.com/embed/eiOaL3v-1rM" title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <hr/>        
          <li>< img src= {cles} width='150px'height='100px'/></li>
      </div>
    )
  }

