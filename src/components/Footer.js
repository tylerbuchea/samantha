import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function Footer({ className }) {
  return (
    <div className={className}>
      <div className="container-restricted" style={{ paddingBottom: 30 }}>
        <div className="has-text-centered">
          <hr />
          ©2019 Samantha Shroyer. All Rights Reserved.
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

export default styled(Footer)``;
