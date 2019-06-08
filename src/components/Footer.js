import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import requiredLogo from '../img/required-logo.png';

export function Footer({ className }) {
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
            <img src={requiredLogo} alt="required logo" />
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
    width: 100%;
  }
  .requiredLogos img {
    max-width: 120px;
  }
`;
