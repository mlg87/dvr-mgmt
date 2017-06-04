import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

const _Icon = (props) => {
  const { name, color } = props;

  return (
    <Icon theme={ { iconFamily: 'FontAwesome' } } name={ name } color={ color } />
  );
};

_Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default _Icon;
