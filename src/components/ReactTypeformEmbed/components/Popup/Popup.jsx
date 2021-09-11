import React from 'react';
import { createPopup } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css';

const Popup = ({ id, className, style, children, ...options }) => {
  const { toggle } = createPopup(id, options);

  return (
    <div role="none" className="react-typeform-embed" onClick={toggle} {...{ className, style }}>
      {children}
    </div>
  );
};

export default Popup;
