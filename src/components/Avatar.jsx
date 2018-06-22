import React from 'react';
import PropTypes from 'prop-types';
import MUIAvatar from '@material-ui/core/Avatar';
import getColor from '../utils/color-form';
import titleInitials from '../utils/title-initials';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </MUIAvatar>
);

Avatar.propTypes = {
  colorFrom: PropTypes.string.isRequired,
  children: PropTypes.string,
};

Avatar.defaultProps = {
  children: '🦄',
};

export default Avatar;
