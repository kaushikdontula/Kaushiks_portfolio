// import React, { useState, useEffect } from "react";
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { LandingPage } from './components/LandingPage';
// import Resume from './components/Resume';
// import { Projects } from './components/Projects';
// import { ContactMe } from './components/ContactMe';
// import { ThemeContext } from './ThemeContext';

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');
//   const [theme, setTheme] = useState('light');

//   const [submitted, setSubmitted] = useState(() => {
//     const storedLoggedIn = localStorage.getItem('submitted');
//     return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
//   });

//   useEffect(() => {
//     localStorage.setItem('submitted', JSON.stringify(submitted));
//   }, [submitted]);

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   const handleFormSubmit = () => {
//     setSubmitted(true);
//     console.log(submitted);
//   }

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={`App ${theme}`}>
//         <Router basename="/Kaushiks_portfolio">
//           <Routes>
//             <Route index element={<LandingPage />} />
//             <Route path="/Kaushiks_portfolio/LandingPage" element={<LandingPage />} />
//             <Route path="/Kaushiks_portfolio/Resume" element={<Resume />} />
//             <Route path="/Kaushiks_portfolio/Projects" element={<Projects />} />
//             <Route path="/Kaushiks_portfolio/ContactMe" element={<ContactMe />} />
//           </Routes>
//         </Router>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// App.js

import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LandingPage } from './components/LandingPage';
import Resume from './components/Resume';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';
import { ThemeContext } from './ThemeContext';

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [theme, setTheme] = useState('light');

  const [submitted, setSubmitted] = useState(() => {
    const storedLoggedIn = localStorage.getItem('submitted');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  useEffect(() => {
    localStorage.setItem('submitted', JSON.stringify(submitted));
  }, [submitted]);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const handleFormSubmit = () => {
    setSubmitted(true);
    console.log(submitted);
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Router basename="/Kaushiks_portfolio">
          <TransitionGroup>
            <Routes>
              <Route
                path="/Kaushiks_portfolio/LandingPage"
                element={
                  <CSSTransition classNames="slide" timeout={6000}>
                    <LandingPage />
                  </CSSTransition>
                }
              />
              <Route
                path="/Kaushiks_portfolio/Resume"
                element={
                  <CSSTransition classNames="slide" timeout={6000}>
                    <Resume />
                  </CSSTransition>
                }
              />
              <Route
                path="/Kaushiks_portfolio/Projects"
                element={
                  <CSSTransition classNames="slide" timeout={6000}>
                    <Projects />
                  </CSSTransition>
                }
              />
              <Route
                path="/Kaushiks_portfolio/ContactMe"
                element={
                  <CSSTransition classNames="slide" timeout={6000}>
                    <ContactMe />
                  </CSSTransition>
                }
              />
            </Routes>
          </TransitionGroup>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;


