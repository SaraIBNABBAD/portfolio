import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faEnvelope,faTurnUp} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ht8ulmd', 'template_s21qghi', e.target, 'clNc8wt3EpBPuj0Dm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };
    return (
      <div className="footer" id="call">
<h1 className="tit" data-aos="fade-zoom-in">Me contacter</h1>
<div className="flxe" data-aos="fade-up">

      <div className="contact" >
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Nom" required/>
          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="sujet" id="sujet"/>
          <textarea name="" id="msg" cols="30" rows="5" placeholder="Message"></textarea>
          <button className="envoi">Envoyer</button>
        </form>
      </div>
      <div className="social">
        <a href="mailto:saraibnabbad96@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
        <a href="https://www.linkedin.com/in/sara-ibnabbad-272b9317b" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="https://github.com/SaraIBNABBAD" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
      </div>
      <div>
        {/* <Chat/> */}
      </div>
      </div>
      </div>
    );
  }

export default Contact;