import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Contact({ className }) {
  const data = useStaticQuery(
    graphql`
      query {
        headshot: file(relativePath: { eq: "headshot.jpg" }) {
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
        <section className="content" role="main">
          <article className="content-item content-contact">
            <h2 className="title is-2">Let's Chat!</h2>
            <ul className="contact-list">
              <li>
                <a href="https://calendly.com/samantharealty">
                  <FontAwesomeIcon icon={faCalendarAlt} /> Schedule a meeting
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sami.shroyer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Message me on Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:samilynn3654@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} /> Send me an email
                </a>
              </li>
              <li>
                <form
                  action="//formspree.io/samilynn3654@gmail.com"
                  method="POST"
                >
                  <input
                    type="email"
                    name="_replyto"
                    placeholder="your-email@example.com"
                    style={{ fontSize: 12.5 }}
                  />
                  &nbsp;
                  <input type="submit" value="SEND" />
                </form>
              </li>
            </ul>
          </article>

          <article className="content-item content-direct">
            <div className="about">
              <div className="about-copy">
                <h2 className="">Hi,</h2>
                <p>
                  I'm Samantha Shroyer I'm a Licensed Oregon Real Estate Agent
                  working in Portland. I love animals{' '}
                  <span role="img" aria-label="dog">
                    🐶
                  </span>
                  and finding people their perfect home{' '}
                  <span role="img" aria-label="smiley face">
                    🙂
                  </span>
                  Add me on{' '}
                  <a href="https://www.instagram.com/samilynn36/">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>{' '}
                  or message me on{' '}
                  <a href="https://www.facebook.com/sami.shroyer">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </a>
                  .
                </p>
              </div>
              <div className="icon-avatar-wrapper">
                <Img
                  fluid={data.headshot.childImageSharp.fluid}
                  className="icon-avatar"
                  alt="avatar"
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default styled(Contact)`
  .about-copy {
    padding-right: 15px;
  }
  .icon-avatar-wrapper {
    border: 3px solid #33c3f0;
    padding: 5px;
    border-radius: 50%;
  }
`;
