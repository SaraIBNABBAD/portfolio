import { Component } from "react";
import './competence.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import { faReact,faHtml5,faCss3Alt,faSquareJs} from '@fortawesome/free-brands-svg-icons'
class Competence extends Component {
     
    render() { 
        return (
          <div className="bodyy">
            <h1 className="comp-titre">Compétences</h1>
            <div className="corp">
                <FontAwesomeIcon icon={faHtml5} className="iconn"/>
                <FontAwesomeIcon icon={faCss3Alt} className="iconn"/>
                <FontAwesomeIcon icon={faSquareJs} className="iconn"/>
                <FontAwesomeIcon icon={faReact} className="iconn"/>
                <FontAwesomeIcon icon={faCode} className="iconn"/>
                
            </div>
             <div className="contnr">
             <p>HTML</p>
            <div className="skills">
              <div className="skill html">90%</div>
            </div>

            <p>CSS</p>
            <div className="skills">
              <div className="skill css">80%</div>
            </div>

            <p>JavaScript</p>
            <div className="skills">
              <div className="skill js">30%</div>
            </div>

            <p>React JS</p>
            <div className="skills">
              <div className="skill react">25%</div>
            </div>
          
             </div>
            
          

          
          </div> 
            
            
            
        );
    }
}
 
export default Competence;