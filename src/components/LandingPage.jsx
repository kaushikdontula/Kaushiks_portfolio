import React from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBasketballBall, FaDumbbell, FaGolfBall, FaHiking, FaMusic, FaPlane, FaShoppingBag, FaUtensils} from 'react-icons/fa';
import '../App.css';

export const LandingPage = (props) => {

  const isMobile = window.innerWidth <= 600; // You can adjust this threshold as needed

    const hobbies = [
      { icon: <FaBasketballBall />, name: "Basketball" },
      { icon: <FaDumbbell />, name: "Working Out" },
      { icon: <FaGolfBall />, name: "Golf" },
      { icon: <FaHiking />, name: "Hiking" },
      { icon: <FaMusic />, name: "Music" },
      { icon: <FaPlane />, name: "Traveling" },
      { icon: <FaShoppingBag />, name: "Fashion" },
      { icon: <FaUtensils />, name: "Food" },
    ];

  const timelineData = [
    {
      id: 5,
      date: "June 2025",
      title: "Graduation Date",
      description: "Graduating with a Bachelors of Science in Computer Science, specializing in AI and Finance",
      location: "Oregon State University, Corvallis OR",
    },
    {
      id: 4,
      date: "Jan 2025 - March 2025",
      title: "AI/ML Neuroscience Researcher",
      description:
        "Participated in a neuroscience research program hosted by Instituto Cajal. Conducted analysis and modeling of neuronal dynamics using machine learning tools, with a focus on hippocampal memory function and behavior prediction through computational models.",
      location: "Madrid, Spain",
    },
    {
      id: 3,
      date: "Jun 2024 - Aug 2024",
      title: "Product Manager Intern @ American Express",
      description: "Lead a cross-functional team to support the development of commercial payment solutions through the digital BCA (Business Checking Account) platform, leading to successful businesses worldwide.",
      location: "New York, NY",
    },
    {
      id: 2,
      date: "Jun 2023 - Jun 2024",
      title: "Salesforce CRM Developer",
      description: "Collaborated with a cross-functional team to maintain and enhance a Salesforce-based application and reporting system.",
      location: "Portland, OR",
    },
    {
      id: 1,
      date: "Jun 2023 - Sep 2023",
      title: "SWE Intern @ Kaiser Permanente",
      description: "Collaborated with an agile scrum team to design, develop, and release the 'Be Healthy' movement, directly impacting Kaiser Permanente members.",
      location: "San Francisco, CA",
    },
    {
      id: 0,
      date: "Jun 2022 - Sep 2022",
      title: "Intern @ TopTech Realty",
      description: "Responsible for assisting the management team in marketing and research through the use of software tools, drones, and cameras to create videos and market them.",
      location: "Portland, WA",
    },
  ];
  if(isMobile){
    return (
      <div style={{ color: '#555', textAlign: 'center', padding: '20px', position: 'relative' }}>
        <NavBar style={{ zIndex: 2 }} />

        <div style={{ marginTop: '90px', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
          {/* Circular profile picture centered horizontally */}
          <div style={{ width: '300px', height: '300px', borderRadius: '50%', overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto' }}>
            <img src={`/Kaushiks_portfolio/profile.png`} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ marginTop: '30px' }}>
            <h1>Welcome to My Portfolio</h1>
            <p>

              Hi, I'm Kaushik Dontula, a passionate technical product manager/solutions architect with a keen interest in the intersection of computer science, AI/ML and finance. Currently in my fourth year of studies, I am driven by the goal of making a significant impact in the fintech industry by creating innovative and technologically advanced products to address real-world user and business challenges.
            </p>
            <p>
              On this website, you'll find a glimpse into my professional and academic journey, showcasing projects that highlight my skills and achievements. From academic endeavors to personal projects, I take pride in each step of my journey. Not only am I proficient in many coding languages such as C, C++, JavaScript, TypeScript, Python, and Node.js, but I also understand the product lifecycle, thrive in cross-functional collaboration, and enjoy the entrepreneurial journey of transforming ideas into impactful solutions.
            </p>
            <p>
              Beyond my technical pursuits, I enjoy learning about the finance, real-estate, healthcare and technology industries. Whether you're here for professional opportunities or just to connect, feel free to explore my portfolio and resume. I'm always open to new collaborations and making new connections. Let's chat!
            </p>

            <h2>Hobbies</h2>
              <div style={{ display: "flex", justifyContent: "center" }}>

                  {hobbies.map((hobby, index) => (
                    <div key={index} style={{ margin: "0 10px", fontSize: "7.5px" }}> 
                      {React.cloneElement(hobby.icon, { size: 17 })} 
                      <p>{hobby.name}</p>
                    </div>
                  ))}
              </div>
          </div>
        </div>

        {/* Timeline section for smaller screens */}
        <div className="timeline-section">
          <style>
            {`
              .costum-line:before {
                background: #555; /* Change to the desired color for the vertical line */
              }
              
              .vertical-timeline-element-icon {
                border: 2px solid #555;
                background: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px; /* Adjust as needed */
                height: 50px; /* Adjust as needed */
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 5%;
                transform: translateX(-50%) translateY(-50%);
              }
              
              .vertical-timeline-element-icon > img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                position: relative; /* Add this line */
              }
            `}
          </style>

          <h2>Career Timeline</h2>
          <VerticalTimeline className="costum-line">
            {timelineData.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                date={event.date}
                iconStyle={{
                  background: "#555", // Set to the desired grey color
                  color: "#fff",
                  width: "60px",
                  height: "60px",
                  position: "absolute",
                  top: "10%",
                  left: "-5%",
                  transform: "translateY(-50%)",
                  borderRadius: "50%", // Add this line to make the container a circle
                }}
                // icon={<img src={`/${event.id}.png`} alt={`Event ${index}`} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
                icon={<img src={`/Kaushiks_portfolio/${event.id}.png`} alt={`Event ${index}`} style={{ width: "100%", height: "100%", borderRadius: "50%"}} />}
              >
                <h3 className="vertical-timeline-element-title" style={{ color: "#333" }}>{event.title}</h3>
                <p style={{ color: "#666" }}>{event.description}</p>

                {/* Location Section */}
                <p style={{ color: "#888", fontStyle: "italic", marginTop: "10px" }}>
                  {event.location}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <Socials />

      </div>
    );
  }
  else{
    return (
      <div style={{ color: '#555'}}>
        <NavBar />

        <header className="hero-section" style={{ marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
          {/* Circular profile picture on the left */}
          <div style={{ width: '350px', height: '350px', borderRadius: '50%', overflow: 'hidden', marginLeft: '120px', marginRight: '100px', marginTop: '200px', flexShrink: 0 }}>
          {/* <img src={`/profile.png`} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
          <img src={`/Kaushiks_portfolio/profile.png`} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="hero-content">
          {/* Paragraph on the right */}
          <div style = {{marginTop: '200px', marginRight: '120px'}}>
              <h1>Welcome to My Portfolio</h1>
              <p>
                Hi, I'm Kaushik Dontula, a passionate technical product manager with a keen interest in the intersection of computer science and finance. Currently in my third year of studies, I am driven by the goal of making a significant impact in the fintech industry by creating innovative and technologically advanced products to address real-world user challenges.
              </p>
              <p>
                On this website, you'll find a glimpse into my professional and academic journey, showcasing projects that highlight my skills and achievements. From academic endeavors to personal projects, I take pride in each step of my journey. I am proficient in many coding languages such as C, C++, Javascript, Typescript, Python, NodeJS, and I am always eager to explore and learn more.
              </p>
              <p>
                Beyond my technical pursuits, I enjoy learning about the finance, real-estate, and technology industries. Whether you're here for professional opportunities or just to connect, feel free to explore my portfolio and resume. I'm always open to new collaborations and making new connections. Let's chat!
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

          <h2>Career Timeline</h2>
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
                // icon={<img src={`/${event.id}.png`} alt={`Event ${index}`} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />}
                icon={<img src={`/Kaushiks_portfolio/${event.id}.png`} alt={`Event ${index}`} style={{ width: "100%", height: "100%", borderRadius: "50%"}} />}
              >
                <h3 className="vertical-timeline-element-title" style={{ color: "#333" }}>{event.title}</h3>
                <p style={{ color: "#666" }}>{event.description}</p>

                {/* Location Section */}
                <p style={{ color: "#888", fontStyle: "italic", marginTop: "10px" }}>
                  {event.location}
                </p>
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
  }
};

