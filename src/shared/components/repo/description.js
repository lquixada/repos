import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Description = ({text}) => (
  <P>{text}</P>
);

Description.propTypes = {
  text: PropTypes.string,
};

const P = styled.p`
  color: #393939;
  font-size: 1.4rem;
  line-height: 1.5;
`;
