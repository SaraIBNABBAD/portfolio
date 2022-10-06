import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faTurnUp} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import Chat from "../chatbot/chat";
import "./contact.css";



class Contact extends Component {
  render() {
    return (
      <div className="footer">
<h1 className="tit">Me contacter</h1>
<div className="flxe">
<div className="social">
        <a href="mailto:saraibnabbad96@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
        <a href="https://www.linkedin.com/in/sara-ibnabbad-272b9317b" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://github.com/SaraIBNABBAD" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      </div>
      <div className="contact">
        <form >
          <input type="text" placeholder="Nom" required/>
          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="sujet" id="sujet"/>
          <textarea name="" id="msg" cols="30" rows="5" placeholder="Message"></textarea>
          <button className="envoi">Envoyer</button>
        </form>
      </div>
      <div>
        {/* <Chat/> */}
      </div>
      </div>
      </div>
    );
  }
}
export default Contact