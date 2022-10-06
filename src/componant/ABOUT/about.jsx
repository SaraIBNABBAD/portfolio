import { Component } from "react";

import "./about.css";
class About extends Component{
    render(){
        return(
            <section className="about">
                <h1 className="tiitre">A propos de moi</h1>
                <p className="suis">Qui suis-je ? </p>
                <div className="text">
                    <h4 className="propos">A propos de moi</h4>
                    <p> Je m'appelles Sara IBN ABBAD, je suis née en 12 - 08 - 1996 à Casablanca, Maroc . J'ai eu mon baccalauréat en, je m'ai orienté vers la faculté après j'ai changé d'avis et j'ai décidé d'aller à OFPPT où j'ai eu mon diplôme en développement multimédia.Finallement j'ai intégré 3W ACADEMY pour étudier le développement web.</p>
                </div>
                
            </section>
            
        )
    }
}
export default About