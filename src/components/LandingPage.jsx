import React from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBasketballBall, FaDumbbell, FaGolfBall, FaHiking, FaMusic, FaPlane } from 'react-icons/fa';

export const LandingPage = (props) => {

    const hobbies = [
        { icon: <FaBasketballBall />, name: "Basketball" },
        { icon: <FaDumbbell />, name: "Working Out" },
        { icon: <FaGolfBall />, name: "Golf" },
        { icon: <FaHiking />, name: "Hiking" },
        { icon: <FaMusic />, name: "Music" },
        { icon: <FaPlane />, name: "Traveling" },
      ];

  const timelineData = [
    {
        id: 4,
        date: "June 2025",
        title: "Anticipated Graduation Date",
        description: "Graduating with a Bachelors of Science, CS in AI and Finance",
    },
    {
        id: 3,
        date: "Jun 2024 - Aug 2024",
        title: "Incoming Product Manager Intern @ American Express",
        description: "Lead a cross-functional team to support the development of commercial payment solutions through digital platforms, leading to successful businesses worldwide",
    },
    {
        id: 2,
        date: "Jun 2023 - Present",
        title: "Salesforce CRM developer",
        description: "Collaborated with cross-functional team to maintain and enhance a Salesforce-based application and reporting system",
    },
    {
        id: 1,
        date: "Jun 2023 - Sep 2023",
        title: "SWE Intern @ Kaiser Permanente",
        description: `Collaborated with agile scrum team to design, develop, and release the “Be Healthy” movement, directly impacting Kaiser Permanente members`,
    },



  ];

  return (
    <div style={{ color: '#555'}}>
      <NavBar />

      <header className="hero-section" style={{ marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
        {/* Circular profile picture on the left */}
        <div style={{ width: '350px', height: '350px', borderRadius: '50%', overflow: 'hidden', marginLeft: '120px', marginRight: '100px', marginTop: '200px', flexShrink: 0 }}>
        <img src={`/profile.png`} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="hero-content">
        {/* Paragraph on the right */}
        <div style = {{marginTop: '200px', marginRight: '120px'}}>
            <h1>Welcome to My Portfolio</h1>
            <p>
            Hi, I'm Kaushik Dontula, a passionate product manager looking to create advanced products to change the world. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>

            <h2>Hobbies</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {hobbies.map((hobby, index) => (
                <div key={index} style={{ margin: "0 10px" }}>
                    {hobby.icon}
                    <p>{hobby.name}</p>
                </div>
                ))}
            </div>
        </div>
        </div>
        
        </header>

      {/* Timeline section */}
      {/* <div className="timeline-section">
        <h2>Timeline</h2>
        <VerticalTimeline>
          {timelineData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.date}
              iconStyle={{ background: "#007bff", color: "#fff" }}
              icon={<img src={`/${event.id}.png`} alt={`Event ${index}`} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />} // Set the width, height, and border-radius as needed
            >
              <h3 className="vertical-timeline-element-title" style={{ color: "#333" }}> {event.title}</h3>
              <p style={{ color: "#666" }}>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div> */}

    {/* Timeline section */}
    <div className="timeline-section">
        <style>
          {`
            .costum-line:before {
              background: #555; /* Change to the desired color for the vertical line */
            }

            .costum-lineh:before {
              background: none; /* Hide the vertical line */
            }

            .vertical-timeline-element-icon > img {
                border: 2px solid #555 !important; /* Set the desired color for the icon border */
              }
          
              .vertical-timeline-element-icon.hidden > img {
                border: none !important; /* Hide the icon border */
              }
          `}
        </style>

        <h2>Timeline</h2>
        <VerticalTimeline className="costum-line">
          {timelineData.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.date}
              iconStyle={{
                background: "#555", // Set to the desired grey color
                color: "#fff",
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "20%",
                left: "49%",
                transform: "translateY(-50%)",
              }}
              icon={<img src={`/${event.id}.png`} alt={`Event ${index}`} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
            >
              <h3 className="vertical-timeline-element-title" style={{ color: "#333" }}>{event.title}</h3>
              <p style={{ color: "#666" }}>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      
      <Socials />
      
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

    </div>
  );
};

