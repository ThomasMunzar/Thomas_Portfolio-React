import React from "react";

function Project ({title, description, deployedLink, githubLink, image}) {
    return(
        <div className="card">
            <img src={image} className="card-img-top" alt="{title}"/>
            <div className="card-body">
                <h5 className="card-title text-center">{title}</h5>
                <p className="card-text text-center">{description}</p>
                <a href={deployedLink} className="d-flex justify-content-center" >
                    Deployed App
                </a>
                <br></br>
                <a href={githubLink} className="d-flex justify-content-center">
                    GitHub Repository
                </a>

            </div>

        </div>
    )
}

export default Project;