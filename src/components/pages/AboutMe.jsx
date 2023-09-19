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
        <div className="container text-center">
        <p className="">
        Hello! I'm Thomas Munzar, originally from Oakland, California. My journey into web development took a unique path. After graduating from SF State with a degree in environmental science, I discovered a passion for cooking and spent time honing my culinary skills in various kitchens across the Bay Area. While I cherished those experiences, my curiosity for technology and coding led me to pivot towards a career in web development.
I embarked on this exciting transition by enrolling in the UC Berkeley Extension Coding Bootcamp, where I immersed myself in the world of full-stack development, with a focus on the MERN stack. The bootcamp challenged me in countless ways, and I enjoyed every moment of the learning process. Through the program, I've acquired a robust set of skills in front-end and back-end development, database management, and creating dynamic web applications.
As I embark on this new journey, I'm enthusiastic about continuing to learn, grow, and contribute to the dynamic field of web development. Please explore my portfolio to see some of the projects I've worked on, showcasing the skills I've acquired during my coding bootcamp.
Thank you for visiting, and I look forward to connecting with fellow web enthusiasts and potential employers to create exciting digital experiences together!

        </p>
        </div>

      </div>
    );
  }