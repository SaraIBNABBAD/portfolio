import { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./projetss.css";
class Projet extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div>
          <img src={this.props.image} alt="img" className="imgMt" />
          </div>
          <div>
            <a href={this.props.lien} target="_blank" className="derig">{this.props.titre}</a>
            <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, mollitia.</p>
          </div>
         
        </div>
      </>
    );
  }
}

export default Projet;
