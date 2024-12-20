import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import Select from 'react-select'

import { localStorageKey } from "./constant";
import './Projects.css'; // Import your CSS file

const projectsData = [
  {
    id: 109,
    title: "Healthcare AI SaaS Application (Capstone Project)",
    description: "Developed an AI-powered SaaS application that parses Machine Readable Files (MRFs) to assist users in analyzing medical procedure costs. The app includes a chatbot interface that allows users to query procedure prices, compare their quotes with average costs, and visualize data with interactive charts. Implemented using nextJS, Python Django, postgreSQL, and openAI API.",
    link: "https://drive.google.com/file/d/16oEEibPSJjC6LUXcLgo0XnFXgK7NTPnT/view?resourcekey",
  },
  {
    id: 107,
    title: "Android Weather App in Kotlin",
    description: "Created a live weather app using RESTful API to get weather data based on location and units. App uses multiple screens to display current weather, five-day forecast, and user settings. App also has share functionality for users to share weather data.",
    link: "https://drive.google.com/file/d/1PrgghBHKg4YXadTcF-QRZusfu4nqFCy8/view?usp=sharing",
  },
  {
    id: 108,
    title: "Cancer Classification using Logistic Regression: AI/ML",
    description: "Developed a logistic regression model to detect and classify cancer based on given datasets. Achieved a high level of accuracy through data processing, feature engineering, and hyperparameter tuning",
    link: "https://drive.google.com/file/d/17xUSGOfDxgjz3WbQR5ktRZS_q6igeuaX/view?usp=sharing",
  },
  {
    id: 100,
    title: "Finance Management Application",
    description: "In this project, me and a group of friends assigned eachother roles based on our strengths and followed an Agile SCRUM methodology to create a web-based financial tracking application using React. Users are able to create an account or log in to input expenses data and view their habits using chartJS.",
    link: "https://kaushikdontula.github.io/CS361-team-repository/",
  },
  
  {
    id: 105,
    title: "Small Shell",
    description: "In this program I write smallsh, my own shell in C. Smallsh implements a subset of features of well-known shell commands, such as ls, cd, fork().",
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
    title: "Song Data Base Full-Stack",
    description: "Using mongoDB, mongoose, and express to create a web based full-stack application that simulates a song database. Includes implementation of CRUD operations.",
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

