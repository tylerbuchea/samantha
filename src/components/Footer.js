import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export function Footer({ className }) {
  const data = useStaticQuery(
    graphql`
      query {
        requiredLogo: file(relativePath: { eq: "required-logo.png" }) {
          childImageSharp {
            fluid(quality: 100) {
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
        <hr />
        <div className="grid">
          <div>
            ©2019 Samantha Shroyer. All&nbsp;Rights&nbsp;Reserved. <br />
            Each office is independently owned and operated.
          </div>

          <div className="requiredLogos">
            {/* <img src={requiredLogo} alt="required logo" /> */}
            <Img
              fluid={data.requiredLogo.childImageSharp.fluid}
              className="requiredLogo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default styled(Footer)`
  .grid {
    display: grid;
    grid-template-columns: 1fr 0fr;
    grid-gap: 10px;
    padding-bottom: 30px;
  }
  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .grid br {
      display: none;
    }
  }
  .requiredLogos {
    width: 120px;
  }
  .requiredLogo {
    width: 100%;
    max-width: 120px;
  }
`;
