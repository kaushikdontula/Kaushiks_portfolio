import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import Select from 'react-select'

import { localStorageKey } from "./constant";
import './Projects.css'; // Import your CSS file

const projectsData = [
  {
    id: 100,
    title: "Finance Management Application",
    description: "In this project, me and a group of friends assigned eachother roles based on our strengths and followed an Agile SCRUM methodology to create a web-based financial tracking application using React. Users are able to create an account or log in to input expenses data and view their habits using chartJS.",
    link: "https://kaushikdontula.github.io/CS361-team-repository/",
  },
  
  {
    id: 105,
    title: "Small Shell",
    description: "In this program I write smallsh, my own shell in C. smallsh implements a subset of features of well-known shells, such as bash.",
    link: "https://github.com/kaushikdontula/SmallShell",
  },

  {
    id: 106,
    title: "News Nest",
    description: "I created a web based application that allows users to stay updated with real time news. They will enter their details and select genres they would like to be notified about, and the application will send them news based on these inputs. ",
    link: "https://kaushikdontula.github.io/news_app/",
  },

  {
    id: 101,
    title: "Song Data Base",
    description: "Using mongoDB and mongoose to create a web based application that simulates a song database. Includes CRUD operations.",
    link: "https://github.com/kaushikdontula/Song-Data-Base",
  },

  {
    id: 103,
    title: "Dijkstras Algorithm",
    description: "This program implements a priority queue which I then use in the Dijkstra.c file to implement the dijkstras algorithm (finding the least cost path from point a to b)",
    link: "https://github.com/kaushikdontula/Dijkstras-algorithm-using-priority-queue",
  },

  {
    id: 104,
    title: "Searching Employees From Database",
    description: "This application uses a company database from MariaDB to display sql queries regarding employees with certain attributes",
    link: "https://github.com/kaushikdontula/CompanyDatabaseQuerying",
  },

  {
    id: 102,
    title: "Hunt the Wumpus Game",
    description: "This game uses polymorphism and object oriented programming to simulate a game of Hunt the Wumpus",
    link: "https://github.com/kaushikdontula/Hunt-the-Wumpus",
  },

];


export const Projects = (props) => {
  
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ color: '#555' }}>
      <NavBar />
      <h1>My Projects</h1>

      {selectedProject && (
        <div className="project-details-popup">
          <div className="popup-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <button onClick={closeProjectDetails}>Close</button>
          </div>
        </div>
      )}
      
      {/* Render your list of projects here as a 3x3 grid */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-item" onClick={() => openProjectDetails(project)}>
            <div className="project-icon">
              {/* <img src={`/${project.id}.png`} alt={project.title} /> */}
              <img src={`/Kaushiks_portfolio/${project.id}.png`} alt={project.title} />
              {/* <img src="https://drive.google.com/file/d/1IJsLbMvXPCCO1oBNvv86t0T_1fEDNnOu/view?usp=sharing" alt={project.title}/> */}
            </div>
            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>

      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <Socials />
    </div>
  );
};

