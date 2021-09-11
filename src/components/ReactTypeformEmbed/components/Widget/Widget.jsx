import React, { useEffect, useRef } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

const Widget = ({ id, className, style, ...options }) => {
  const typeformElm = useRef(null);

  useEffect(() => {
    createWidget(id, { container: typeformElm.current, ...options });
  }, [id]);

  return <div className="react-typeform-embed" ref={typeformElm} {...{ className, style }} />;
};

export default Widget;
