import React from 'react';
import PropTypes from 'prop-types';
import { Widget, Popup } from './components';

const Components = {
  widget: Widget,
  popup: Popup,
};

const ReactTypeformEmbed = ({
  id = '',
  type = 'widget',
  children,
  style,

  // See the options and default values at the official Typeform docs
  // https://github.com/Typeform/embed/tree/main/packages/embed#options
  ...options
}) => {
  const Component = Components[type] || Widget;

  return (
    <Component className="react-typeform-embed" {...{ id, style, options }}>
      {children}
    </Component>
  );
};

ReactTypeformEmbed.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
  options: PropTypes.object,
};

export default ReactTypeformEmbed;
