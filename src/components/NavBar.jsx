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
                <Link class="link-txt" to="/LandingPage">About</Link>
                <Link class="link-txt" to="/Resume">Resume</Link>
                <Link class="link-txt" to="/Projects">Projects</Link>
                <Link class="link-txt" to="/ContactMe">Contact Me</Link>

            </div>
        </div>
        )
    }
}