import React from "react";

export default function Projects() {
  const projects = [
    { 
      image: "/images/simplecaculator-img.svg", 
      title: "Simple Calculator", 
      githubLink: "https://github.com/urwah-fatima/simple-calculator", 
      description: "It is a simple calculator made in Typescript/Javascript." 
    },
    { 
      image: "/images/cligame-img.svg", 
      title: "Cli-Number Guessing Game", 
      githubLink: "https://github.com/urwah-fatima/cli-number-guessing-game", 
      description: "It is a cli-number guessing game created with Typescript/Javascript." 
    },
    { 
      image: "/images/quizapp-img.svg", 
      title: "Quiz App", 
      githubLink: "https://github.com/urwah-fatima/quizapp-next.js", 
      vercelLink: "https://quizapp-next-js.vercel.app/", 
      description: "This is a small Quiz application created using Next.js and Tailwind CSS." 
    },
    { 
      image: "/images/biesction-img.svg", 
      title: "Bisection Method", 
      githubLink: "https://github.com/urwah-fatima/comp-phy-biesctionmethod", 
      description: "This is a small Python project that uses the bisection method to find the root of a given mathematical function." 
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <Image src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.vercelLink && <a href={project.vercelLink} target="_blank" rel="noopener noreferrer">View Live</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
