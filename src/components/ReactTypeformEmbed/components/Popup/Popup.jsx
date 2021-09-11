import React from 'react';
import { createPopup } from '@typeform/embed';
import Modal from '../Modal';
import '@typeform/embed/build/css/popup.css';

const Popup = (props) => <Modal create={createPopup} {...props} />;

export default Popup;
