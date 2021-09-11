import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css';

const Widget = ({ id, style }) => {
  const typeformElm = useRef(null);

  useEffect(() => {
    if (!typeformElm?.current) return;

    createWidget(id, { container: typeformElm.current });
  }, [id]);

  return <div ref={typeformElm} {...{ style }} />;
};

Widget.propTypes = {
  style: PropTypes.object,
  id: PropTypes.string.isRequired,
};

Widget.defaultProps = {
  style: {},
};

export default Widget;
