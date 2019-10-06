import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
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
        realtorCom: file(relativePath: { eq: "realtor-small.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 150) {
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
                  <Link className="icon navbar-link" to="/">
                    <FontAwesomeIcon style={{ fontSize: 17 }} icon={faHome} />{' '}
                    Home
                  </Link>
                </li>

                <li className="navbar-item">
                  <Link className="icon navbar-link" to="/blog">
                    <FontAwesomeIcon
                      style={{ fontSize: 17 }}
                      icon={faPencilAlt}
                    />{' '}
                    Blog
                  </Link>
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
                    className="icon navbar-link navbar-link-flex"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.realtor.com%2Frealestateagents%2Fsamantha-shroyer_portland_or_3752970_658679092&h=AT0WEw87hSqimWtirRuG4p6NJVkIVuDmq3a0ODAZ5yqcjmVZkkqhGd_l_UZCQSye-30DWzx50Mk8vfRU9l2xxw22YUuEb7fr_rEpcoPz4IgAVHjffTIg5O0J6rDsYYR9lu4H_mgJ"
                  >
                    <Img
                      fluid={data.realtorCom.childImageSharp.fluid}
                      style={{
                        width: 17,
                        height: 16,
                        position: 'relative',
                        bottom: 2,
                      }}
                    />{' '}
                    <div>Realtor.com</div>
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/samantha-shroyer-9a7780194/"
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
