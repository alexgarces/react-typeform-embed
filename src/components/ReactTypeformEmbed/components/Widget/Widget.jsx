import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

const Widget = ({ id, options, className, style }) => {
  const typeformElm = useRef(null);

  useEffect(() => {
    createWidget(id, { container: typeformElm.current, ...options });
  }, [id]);

  return <div ref={typeformElm} {...{ className, style }} />;
};

Widget.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Widget;
