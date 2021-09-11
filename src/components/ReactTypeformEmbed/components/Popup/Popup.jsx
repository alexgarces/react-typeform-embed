import React from 'react';
import PropTypes from 'prop-types';
import { createPopup } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css';

const Popup = ({ id, options, className, style, children }) => {
  const { toggle } = createPopup(id, options);

  return (
    <div role="none" onClick={toggle} {...{ className, style }}>
      {children}
    </div>
  );
};

Popup.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Popup;
