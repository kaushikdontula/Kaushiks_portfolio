import React, { Component } from 'react';
import Resume from './Resume';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {


    render(){
        return(
        <div className="nav-main">
            {/* <div className="logo">
                <a className="logo-link" href="/"><h2 className="nav-logo">Kaushik Dontula</h2></a>
            </div> */}
            <div className="links">
                <Link className="link-txt" to="/Kaushiks_portfolio/LandingPage">About</Link>
                <Link className="link-txt" to="/Kaushiks_portfolio/Resume">Resume</Link>
                <Link className="link-txt" to="/Kaushiks_portfolio/Projects">Projects</Link>
                <Link className="link-txt" to="/Kaushiks_portfolio/ContactMe">Contact Me</Link>
            </div>
        </div>
        )
    }
}