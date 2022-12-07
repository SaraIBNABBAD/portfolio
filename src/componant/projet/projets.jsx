import { Component } from "react";
import Projet from "./projet";
import squade from "../../img/squade.PNG";
// import green from "../../img/green.PNG";
import calcul from "../../img/calc.JPG";
import list from "../../img/lise.PNG";
import devin from "../../img/devinette.PNG";

class Projets extends Component {
  render(){
    return (
      <div id="pro">
        <h1 className="project" data-aos="fade-zoom-in">Projets</h1>
      
          <div className="flex">
            <Projet
              image={squade}
              lien="https://saraibnabbad.github.io/Squade/"
              lienG="https://github.com/SaraIBNABBAD/Squade"
              titre="Squade Free"
              description="Une maquette riche d'informations qui englobe beaucoup de propriété CSS  "
            />
            <Projet
              image={calcul}
              lien="https://saraibnabbad.github.io/Calculatrice/"
              lienG="https://github.com/SaraIBNABBAD/Calculatrice"
              titre="Calculatrice"
              description="La Calculatrice parmis les prpjets quand on a réalisé avec HTML , CSS et JavaScriptv ."
              
            />
            
            <Projet
              image={devin}
              lien="https://saraibnabbad.github.io/Devinette/"
              lienG="https://github.com/SaraIBNABBAD/Devinette"
              titre="Devinette"
              description="Un jeu de devinettes de nombres est un jeu de devinettes simple où un utilisateur est censé deviner un nombre dans trois niveaux différents"
            />
            <Projet
              image={list}
              lien="https://saraibnabbad.github.io/todo-list/"
              lienG="https://github.com/SaraIBNABBAD/todo-list"
              titre="Todo List"
              description="Une liste de choses à faire peut être définie comme une liste de courses ou de tâches, généralement écrite comme une aide à la mémoire."
            />
          </div>
          <button className="show"><a href="https://github.com/SaraIBNABBAD?tab=repositories" target="_blank" rel="noopener noreferrer">voir plus</a></button>

      </div>
    );
  }
}

export default Projets;
