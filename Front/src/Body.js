import {Services} from "./Services";
import {Cars} from "./Cars";

 export const Serv = () => {
    let servicesList = ["Private transport from anywhere in Nice, Cannes, Monaco, St Tropez to your location.",
    "Availability to your shopping and parties.", " Discovery tours organiser and advisor.", "Booking for you, restaurans, hotels, villas ...",
    " Body gards and private security. ", "Luxury and sport cars rental.",]

    return (
        <section>
          <Services list_2={servicesList} />
        </section>
      )
    };

  export const Voitures = () => {
    let carList = ["Mercedes S Class 2020", "Mercedes V Class 2020", "Cadillac Escalade 2020", "Citroen 2CV collector"]
      return(
        <section>
          <Cars list_1={carList} />
        </section>
      )
  }