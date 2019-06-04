import React, { Component } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';

import Header from './Header';
import Contact from './Contact';
import BlogRoll from './BlogRoll';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        {/* <div className="container-restricted">
          <div className="content-item conent-blog">
            <hr />
            <h2>Latest</h2>
          </div>
        </div>
        <BlogRoll /> */}
      </div>
    );
  }
}
