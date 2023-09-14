import React from "react";
//Importing my project component
import Project from "../project";


export default function Portfolio() {
  const projects = [
    {
     title: 'forumZ',
     description: 'The all encompassing Reddit-like platform where you can explore different forumZ, make a post with an embedded video or picture, comment on others posts and even reply to comments!',
     deployedLink: 'https://forumz-090c0b5b4bff.herokuapp.com/',
     githubLink: 'https://github.com/jacob-kachmarek/forumZ'
   },
    {
      title: 'Wack',
      description: 'A community driven project platform. Sign-up and create a project with a todo list. Get input from other users and comment on other users projects.',
      deployedLink: 'https://blooming-beyond-30251-89ceb9e97d3f.herokuapp.com/',
      githubLink: 'https://github.com/ThomasMunzar/Wack',
    },
     {
      title: 'Alternate Fuel Locator',
      description: 'Enter your zipcode and find a gas station that offers alt. fuel!',
      deployedLink: 'https://iquiroz95.github.io/diesel-din-dance/',
      githubLink: 'https://github.com/iquiroz95/diesel-din-dance',
    },
     {
      title: 'Full-Stack ToDo List',
      description: 'Refactored code to make this a fully functional app',
      deployedLink: 'https://to-do-list-express-9a349a9545e8.herokuapp.com/',
      githubLink: 'https://github.com/ThomasMunzar/To-Do-List-Express',
    },
     {
      title: 'Password Generator',
      description: 'This simple app allows you generator a secure password. ',
      deployedLink: 'https://thomasmunzar.github.io/Best-Password-Generator-TM-/',
      githubLink: 'https://github.com/ThomasMunzar/Best-Password-Generator-TM-',
    },
     {
      title: 'Text Editor 3000',
      description: 'My first attempt at a PWA, a simple text editor. Downloadable and fucntional.',
      deployedLink: 'https://text-editor-3000-6b4fcab221b1.herokuapp.com/',
      githubLink: 'https://github.com/ThomasMunzar/Text-Editor-PWA',
    },
  ];


    return (
      <div className="container">
        <h1 className="d-flex justify-content-center">
          My Work
        </h1>
        <div>
        {projects.map((project,index) =>(
          <Project key={index} {...project} />
          ))}
        </div>

       
      </div>
    );
  }