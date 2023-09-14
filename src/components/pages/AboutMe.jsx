import React from "react";
import Thomas from "/assets/images/Thomas.jpeg"
import './About.css'

export default function About() {

  return (
      <div className="container">
        <div className="d-flex justify-content-center">
        <h1 >Thomas Munzar</h1>
        </div>
        <h5 className="d-flex justify-content-center">Web Developer</h5>

        <div>
          <img src={Thomas} alt="Image of a Web Developer" className="about-image"></img>
        </div>
        <div className="text-center">
        <p className="">
          Hello! My name is Thomas Munzar, I am from Oakland California and am excited to start my career in web development.  I studied environmental science at SF State and then fell in love with cooking.
          I have working in many kitchens in the Bay Area but am now making a career change to web development. I studied web development at UC Berkeley Extention Coding Bootcamp. It was extremely challenging 
          but I enjoyed the entire process but a very fun a rewarding journey, I am excited to learn so much more as I start my journey. Feel free to checkout some of the projects I have worked on!
        </p>
        </div>

      </div>
    );
  }