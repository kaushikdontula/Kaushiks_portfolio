import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLinkedinHovered: false,
      isInstagramHovered: false,
      isGithubHovered: false,
      isEnvelopeHovered: false,
    };
  }

  handleHover = (iconName) => {
    this.setState({ [iconName]: true });
  };

  handleLeave = (iconName) => {
    this.setState({ [iconName]: false });
  };

  render() {
    const styles = {
      footer: {
        marginTop: '30px', // Adjust the top margin as needed
        marginBottom: '40px', // Adjust the bottom margin as needed
        width: '80%',
        margin: '0 auto',
        textAlign: 'center',
      },
      socialIcons: {
        display: 'flex',
        justifyContent: 'space-between', // Adjust as needed
        alignItems: 'center',
      },
      socialIcon: {
        color: '#333', // Adjust icon color
        marginRight: '15px', // Adjust the right margin between icons
        textDecoration: 'none',
        transform: 'scale(1)', // Initial size
        transition: 'transform 0.2s ease-in-out', // Add a smooth transition effect
      },
    };

    return (
      <footer style={styles.footer}>
        <div style={styles.socialIcons}>
          <Link
            to="https://www.linkedin.com/in/kaushik-dontula-7719b0122/"
            style={{
              ...styles.socialIcon,
              transform: this.state.isLinkedinHovered ? 'scale(1.5)' : 'scale(1)',
            }}
            className="social-link"
            onMouseEnter={() => this.handleHover('isLinkedinHovered')}
            onMouseLeave={() => this.handleLeave('isLinkedinHovered')}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
          <Link
            to="https://www.instagram.com/kaushikdontula/?next=%2F"
            style={{
              ...styles.socialIcon,
              transform: this.state.isInstagramHovered ? 'scale(1.5)' : 'scale(1)',
            }}
            className="social-link"
            onMouseEnter={() => this.handleHover('isInstagramHovered')}
            onMouseLeave={() => this.handleLeave('isInstagramHovered')}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link
            to="https://github.com/kaushikdontula"
            style={{
              ...styles.socialIcon,
              transform: this.state.isGithubHovered ? 'scale(1.5)' : 'scale(1)',
            }}
            className="social-link"
            onMouseEnter={() => this.handleHover('isGithubHovered')}
            onMouseLeave={() => this.handleLeave('isGithubHovered')}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <Link
            to="mailto:kaushikdontula@gmail.com"
            style={{
              ...styles.socialIcon,
              transform: this.state.isEnvelopeHovered ? 'scale(1.5)' : 'scale(1)',
            }}
            className="social-link"
            onMouseEnter={() => this.handleHover('isEnvelopeHovered')}
            onMouseLeave={() => this.handleLeave('isEnvelopeHovered')}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        </div>
      </footer>
    );
  }
}


