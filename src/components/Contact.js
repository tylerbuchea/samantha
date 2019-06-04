import React from 'react';
import styled from 'styled-components';

import headshot from '../img/headshot.jpg';

export function Contact({ className }) {
  return (
    <div className={className}>
      <div className="container-restricted">
        <section className="content row" role="main">
          <article className="content-item content-contact">
            <h2 className="title is-2">Let's Chat!</h2>
            <ul className="contact-list">
              <li>
                <i className="fa fa-calendar-alt" />{' '}
                <a href="https://calendly.com/tylerbuchea">
                  Schedule a meeting
                </a>
              </li>
              <li>
                <i className="fab fa-facebook" />{' '}
                <a
                  href="https://twitter.com/tylerbuchea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add me on Facebook
                </a>
              </li>
              <li>
                <i className="fa fa-envelope" />{' '}
                <a
                  href="mailto:tyler@buchea.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send me an email
                </a>
              </li>
              <li>
                <form action="//formspree.io/tyler@buchea.com" method="POST">
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
                  I'm Samantha Shroyer I'm a licensed Oregon real estate agent
                  working in Portland. I love animals 🐶and finding people their
                  perfect home 🙂Message me on Facebook{' '}
                  <a href="https://www.facebook.com/sami.shroyer">
                    @sami.shroyer
                  </a>
                  .
                </p>
              </div>
              <img src={headshot} className="icon-avatar" alt="avatar" />
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
`;
