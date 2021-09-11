import React from 'react';
import PropTypes from 'prop-types';
import '@typeform/embed/build/css/widget.css';
import { Widget } from './components';

const Component = {};

const ReactTypeformEmbed = ({ id, type, style }) => {
  const UI = Component[type] || Widget;

  return <UI className="ReactTypeformEmbed" {...{ id, style }} />;
};

ReactTypeformEmbed.propTypes = {
  style: PropTypes.object,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  // popup: PropTypes.bool,
  // hideHeaders: PropTypes.bool,
  // hideFooter: PropTypes.bool,

  // Widget options
  // opacity: PropTypes.number,
  // buttonText: PropTypes.string,

  // Popup options
  // mode: PropTypes.string,
  // autoOpen: PropTypes.bool,
  // autoClose: PropTypes.number,
  // onSubmit: PropTypes.func,
};

// Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/
ReactTypeformEmbed.defaultProps = {
  type: 'widget',
  style: {},
  // popup: false,
  // hideHeaders: false,
  // hideFooter: false,
  // onSubmit: () => {},
  // Widget options
  // opacity: 100,
  // buttonText: 'Start',
  // Popup options
  // mode: 'popup', // options: "popup", "drawer_left", "drawer_right"
  // autoOpen: false,
  // autoClose: 5,
};

export default ReactTypeformEmbed;
