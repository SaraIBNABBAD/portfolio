import { Component } from "react";
import './skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import { faReact,faHtml5,faCss3Alt,faSquareJs,faBootstrap,faphp,falaravel} 
from '@fortawesomefree-brands-svg-icons';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Competence = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  });
    
        return (
          <div id="comp">
          <h1 className="comp-titre" data-aos="fade-zoom-in">Compétences</h1>
          <div className="bodyy">
          <div className="contnr" data-aos="flip-left">
             <p>HTML</p>
            <div className="skills">
              <div className="skill html">90%</div>
            </div>

            <p>CSS</p>
            <div className="skills">
              <div className="skill css">90%</div>
            </div>

            <p>Bootstrap</p>
            <div className="skills">
              <div className="skill boot">80%</div>
            </div>

            <p>JavaScript</p>
            <div className="skills">
              <div className="skill js">70%</div>
            </div>

            <p>React JS</p>
            <div className="skills">
              <div className="skill react">70%</div>
            </div>

            <p>PHP</p>
            <div className="skills">
              <div className="skill react">75%</div>
            </div>

            <p>Laravel</p>
            <div className="skills">
              <div className="skill react">75%</div>
            </div>
          
             </div>
            
            <div className="corp" data-aos="flip-right">
                <FontAwesomeIcon icon={faHtml5} className="iconn"/>
                <FontAwesomeIcon icon={faCss3Alt} className="iconn"/>
                <FontAwesomeIcon icon={faBootstrap} className="iconn"/>
                <FontAwesomeIcon icon={faSquareJs} className="iconn"/>
                <FontAwesomeIcon icon={faReact} className="iconn"/>
                <FontAwesomeIcon icon={faCode} className="iconn"/>
                <FontAwesomeIcon icon={faphp}  className="icon"/>
                <FontAwesomeIcon icon={falaravel} />
            </div>
             
          

          
          </div></div>
         
            
            
            
        );
    }

 
export default Competence;