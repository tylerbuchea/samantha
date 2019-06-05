import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { graphql, useStaticQuery } from 'gatsby';

import Header from './Header';
import Contact from './Contact';
// import BlogRoll from './BlogRoll';

export function Home({ className }) {
  return (
    <div className={className}>
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

Home.propTypes = { className: PropTypes.string };

Home.defaultProps = { className: null };

export default styled(Home)``;
