import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Title = ({children}) => (
  <Wrapper>{children}</Wrapper>
);

Title.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.h2`
  color: #3c4146;
  font-family: 'Lato', Helvetica, sans-serif;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: -.1rem;
  line-height: 1.5;
  vertical-align: middle;
`;
