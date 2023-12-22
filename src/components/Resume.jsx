import { ThemeContext } from '../ThemeContext';
import React, { useContext, useState } from 'react';
import NavBar from './NavBar';
import Socials from './Socials';

import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [lastSavedTime, setLastSavedTime] = useState(null);

  return (
    <div style={{ color: '#555' }}> {/* Set the font color to grey */}
      <NavBar />
      <h1>Kaushik Dontula's Resume</h1>
      <p>Here you can view or download my resume:</p>
      {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#555' }}> Resume (PDF)</a> */}
      <a href="/Kaushiks_portfolio/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#555' }}> Resume (PDF)</a>


      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <Socials />
    </div>
  );
};

export default Resume;
