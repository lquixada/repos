import React from 'react';
import PropTypes from 'prop-types';

import {P} from '../grid';

export const Description = ({text}) => (
  <P>{text}</P>
);

Description.propTypes = {
  text: PropTypes.string,
};

