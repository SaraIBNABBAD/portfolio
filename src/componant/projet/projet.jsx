import { Component } from "react";
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
            <a href={this.props.lien} target="_blank">{this.props.titre}</a>
          </div>
         
        </div>
      </>
    );
  }
}

export default Projet;
