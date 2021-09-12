import React from 'react';
import { createSidetab } from '@typeform/embed';
import Modal from '../Modal';
import '@typeform/embed/build/css/sidetab.css';

const Sidetab = (props) => <Modal create={createSidetab} {...props} />;

export default Sidetab;
