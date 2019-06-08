import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export function Header({ className }) {
  const data = useStaticQuery(
    graphql`
      query {
        kwLogo: file(relativePath: { eq: "keller-williams-logo.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 230) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <div className={className}>
      <div className="container-restricted">
        <header className="header">
          <h1>
            <a href="https://samantha.realty">
              Samantha Shroyer
              <FontAwesomeIcon icon={faHome} style={{ fontSize: 25 }} />
            </a>
          </h1>
          <h2>Real Estate Agent</h2>
          <div className="kwLogo">
            <Img fluid={data.kwLogo.childImageSharp.fluid} />
          </div>

          <nav className="navbar">
            <div className="container">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <a className="icon navbar-link" href="/">
                    <FontAwesomeIcon style={{ fontSize: 17 }} icon={faHome} />{' '}
                    Home
                  </a>
                </li>

                <li className="navbar-item">
                  <a className="icon navbar-link" href="/blog">
                    <FontAwesomeIcon
                      style={{ fontSize: 17 }}
                      icon={faPencilAlt}
                    />{' '}
                    Blog
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/samilynn36/"
                  >
                    <FontAwesomeIcon
                      style={{ fontSize: 17 }}
                      icon={faInstagram}
                    />{' '}
                    Instagram
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://facebook.com/sami.shroyer"
                  >
                    <FontAwesomeIcon
                      style={{ fontSize: 17 }}
                      icon={faFacebook}
                    />{' '}
                    Facebook
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/tyler-buchea-b3a43376"
                  >
                    <FontAwesomeIcon
                      style={{ fontSize: 17 }}
                      icon={faLinkedin}
                    />{' '}
                    Linkedin
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
