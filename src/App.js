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
        {/* <Router basename="/Kaushiks_portfolio">
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/Kaushiks_portfolio/LandingPage" element={<LandingPage />} />
            <Route path="/Kaushiks_portfolio/Resume" element={<Resume />} />
            <Route path="/Kaushiks_portfolio/Projects" element={<Projects />} />
            <Route path="/Kaushiks_portfolio/ContactMe" element={<ContactMe />} />
          </Routes>
        </Router> */}

        <Router>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/ContactMe" element={<ContactMe />} />
          </Routes>
        </Router>


      </div>
    </ThemeContext.Provider>
  );
}

export default App;
