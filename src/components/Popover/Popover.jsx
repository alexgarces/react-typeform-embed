import React from 'react';
import { createPopover } from '@typeform/embed';
import Modal from '../Modal';
import '@typeform/embed/build/css/popover.css';

const Popover = (props) => <Modal create={createPopover} {...props} />;

export default Popover;
