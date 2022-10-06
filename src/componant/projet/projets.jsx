import { Component } from "react";
import Projet from "./projet";
import squade from "../../img/squade.PNG";
import green from "../../img/green.PNG";
import list from "../../img/lise.PNG";
import devin from "../../img/devinette.PNG";
class Projets extends Component {
  render() {
    return (
      <>
        <h1 className="project m-5">Mes Projets</h1>
      
          <div className="flex">
            <Projet
              image={squade}
              lien="https://saraibnabbad.github.io/Squade/"
              titre="Squade Free"
            />
            <Projet
              image={green}
              lien="https://saraibnabbad.github.io/greenoffice/"
              titre="Green Office"
            />
            
            <Projet
              image={devin}
              lien="https://saraibnabbad.github.io/Devinette/"
              titre="Devinette"
            />
            <Projet
              image={list}
              lien="https://saraibnabbad.github.io/todo-list/"
              titre="Todo List"
            />
          </div>
          <button className="show"><a href="https://github.com/SaraIBNABBAD?tab=repositories" target="_blank" rel="noopener noreferrer">voir plus</a></button>

      </>
    );
  }
}

export default Projets;
