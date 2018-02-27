import React from 'react';
import { PropTypes } from 'prop-types';


const Icon = props => (
  <div
    className="Icon-container"
    style={props.containerStyle}
    onClick={() => props.onClick()}
    onKeyPress={() => props.onClick()}
    role="button"
    tabIndex={0}
  >
    <i
      className="material-icons"
      style={props.style}
    >{props.icon}
    </i>
  </div>
);


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
};

Icon.defaultProps = {
  style: {},
  onClick: () => { },
  containerStyle: {},
};

export default Icon;
