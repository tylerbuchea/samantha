import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import kellerWilliamsLogo from '../img/keller-williams-logo.jpg';

export function Header({ className }) {
  return (
    <div className={className}>
      <div className="container-restricted">
        <header className="header">
          <h1>
            <a href="https://samantha.realty">
              Samantha Shroyer <i className="fa fa-home" />
            </a>
          </h1>
          <h2>Real Estate Agent</h2>
          <img src={kellerWilliamsLogo} className="kwLogo" />

          <nav className="navbar">
            <div className="container">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a className="icon navbar-link" href="/">
                    <i className="fa fa-home" /> Home
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="/blog">
                    <i className="fa fa-pencil-alt" /> Blog
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/samilynn36/"
                  >
                    <i className="fab fa-instagram" /> Instagram
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://facebook.com/sami.shroyer"
                  >
                    <i className="fab fa-facebook" /> Facebook
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/tyler-buchea-b3a43376"
                  >
                    <i className="fab fa-linkedin" /> Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

Header.propTypes = { className: PropTypes.string };

Header.defaultProps = { className: null };

export default styled(Header)`
  .kwLogo {
    max-width: 220px;
    width: 100%;
    margin-bottom: 2rem;
  }
`;
