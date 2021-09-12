import React from 'react';

const Modal = ({ id, style, children, create, ...options }) => {
  const { toggle } = create(id, options);

  return (
    <div
      role="none"
      className="react-typeform-embed"
      onClick={children ? toggle : null}
      style={{ display: 'inline-block', ...style }}
    >
      {children}
    </div>
  );
};

export default Modal;
