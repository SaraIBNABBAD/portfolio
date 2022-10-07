import { Component } from "react";
import "./about.css";
import sara from "../../img/sara.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  
    
  useEffect(()=>{
    Aos.init({duration:2000});
  });
    return (
      <section className="about" id="ab">
        <h1 className="tiitre" data-aos="fade-zoom-in">A propos de moi</h1>
        <p className="suis">Qui suis-je ? </p>
        <div className="flx">
        <div className="text"  data-aos="fade-up" >
          <h4 className="propos">A propos de moi</h4>
          <p className="">
            Je m'appelles Sara IBN ABBAD, je suis née en 12 - 08 - 1996 à
            Casablanca, Maroc . J'ai eu mon baccalauréat en, je m'ai orienté
            vers la faculté après j'ai changé d'avis et j'ai décidé d'aller à
            OFPPT où j'ai eu mon diplôme en développement multimédia.Finallement
            j'ai intégré 3W ACADEMY pour étudier le développement web.
          </p>
        </div>
          {/* <div>
            <img src={sara} alt="SARA"  className="img"/>
          </div> */}
        
        </div>
      </section>
    );
  }

export default About;
