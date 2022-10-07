import { Component } from "react";
import "./portfolio.css";
import { TypeAnimation } from "react-type-animation";
import anime from "animejs/lib/anime.es.js";
import About from "./ABOUT/about";
import Contact from "./CONTACT/contact";
import Projets from "./projet/projets";
import Competence from "./skills/skill";
import fond from "../img/fondd.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.animation = anime.timeline({ loop: false });
  }
  componentDidMount() {
    this.animation.add({
      targets: "#name",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    });
  }
  render() {
    return (
      <>
      
          <header className="head" id="fist" >
            <div className="info">
              <h3 className="nom">Sara IBN ABBAD</h3>
              <TypeAnimation
            sequence={[
              "Technicienne Spécialsée en Développement Multimédia", 
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em" }}
          />
          <TypeAnimation
            sequence={[
              "Développeur Full stack junior", 
              2000, 
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1.5em" }}
          />
              <p></p>
              <p></p>
              <button className="cv"><a href="https://saraibnabbad.github.io/CV/" target="_blank">Voir CV</a></button>
            </div>
            
            {/* <button className="btn">
                <i className="bi bi-chevron-double-down"></i>
              </button>
             */}
              
          </header>
          <main>
            <About/>
            <Competence/>
            <Projets/>
          </main>
      </>
    );
  }
}
export default Portfolio;
