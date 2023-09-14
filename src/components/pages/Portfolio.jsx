import React from "react";
import Project from "../project";
import Forumz from '/assets/images/Forumz.png'
import Diesel from '/assets/images/Diesel.png'
import Jate from '/assets/images/JATE.png'
import Password from '/assets/images/Password.png'
import Whack from '/assets/images/Whack.png'
import '../Project.css'


export default function Portfolio() {
  const projects = [
    {
      title: 'forumZ',
      description: 'The all encompassing Reddit-like platform where you can explore different forumZ, make a post with an embedded video or picture, comment on others posts and even reply to comments!',
      deployedLink: 'https://forumz-090c0b5b4bff.herokuapp.com/',
      githubLink: 'https://github.com/jacob-kachmarek/forumZ',
      image: Forumz
    },

    {
      title: 'Whack',
      description: 'A community driven project platform. Sign-up and create a project with a todo list. Get input from other users and comment on other users projects.',
      deployedLink: 'https://blooming-beyond-30251-89ceb9e97d3f.herokuapp.com/',
      githubLink: 'https://github.com/ThomasMunzar/Wack',
      image: Whack
    },
    {
      title: 'Alternate Fuel Locator',
      description: 'Enter your zipcode and find a gas station that offers alt. fuel!',
      deployedLink: 'https://iquiroz95.github.io/diesel-din-dance/',
      githubLink: 'https://github.com/iquiroz95/diesel-din-dance',
      image: Diesel
    },
    {
      title: 'Password Generator',
      description: 'This simple app allows you generator a secure password. ',
      deployedLink: 'https://thomasmunzar.github.io/Best-Password-Generator-TM-/',
      githubLink: 'https://github.com/ThomasMunzar/Best-Password-Generator-TM-',
      image: Password
    },
    {
      title: 'Text Editor 3000',
      description: 'My first attempt at a PWA, a simple text editor. Downloadable and fucntional.',
      deployedLink: 'https://text-editor-3000-6b4fcab221b1.herokuapp.com/',
      githubLink: 'https://github.com/ThomasMunzar/Text-Editor-PWA',
      image: Jate
    },
  ];


  return (
    <div className="container project-container">
      <div className="container">
        <h1 className="d-flex justify-content-center">
          My Work
        </h1>
        <div>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}