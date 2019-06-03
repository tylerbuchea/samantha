import React, { Component } from 'react';
import headshot from '../img/headshot.jpg';

export default class Header extends Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-restricted">
        <header className="header row">
          <h1>
            <a href="https://samanthashroyer.com">
              Samantha Shroyer{' '}
              <div>
                <i className="fa fa-home" />
              </div>
            </a>
          </h1>
          <h2>Real Estate Agent</h2>

          <hr className="divider" />

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
                    href="https://facebook.com/sami.shroyer"
                  >
                    <i className="fab fa-facebook" /> Facebook
                  </a>
                </li>

                <li className="navbar-item">
                  <a
                    className="icon navbar-link"
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
    );
  }
}
