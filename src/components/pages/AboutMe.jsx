import React from "react";

// import Thomas from "../../../public/assets/images/Thomas.png"
export default function About() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
        <h1 >Thomas Munzar</h1>
        </div>
        <h5 className="d-flex justify-content-center">Web Developer</h5>

        <div>
          <img src="/assets/images/Thomas.png" alt="Image of a Web Developer"></img>
        </div>
        <div className="text-center">
        <p className="">
          Hello! My name is Thomas Munzar, I am from Oakland California and am excited to start my career in web development.  I studied environmental science at SF State and then fell in love with cooking.
          I have working in many kitchens in the Bay Area but am now making a career change to web development. I studied web development at UC Berkeley Extention Coding Bootcamp. It was extremely challenging 
          but I enjoyed the entire process. Learning this new skill is extremely rewarding and I am excited to learn so much more as I start my journey.
        </p>
        </div>

      </div>
    );
  }