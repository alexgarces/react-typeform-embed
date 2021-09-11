import React from 'react';
import { createSlider } from '@typeform/embed';
import '@typeform/embed/build/css/slider.css';

const Slider = ({ id, className, style, children, ...options }) => {
  const { toggle } = createSlider(id, { ...options });

  return (
    <div role="none" className="react-typeform-embed" onClick={toggle} {...{ className, style }}>
      {children}
    </div>
  );
};

export default Slider;
