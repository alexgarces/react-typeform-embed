import React from 'react';
import { createSlider } from '@typeform/embed';
import Modal from '../Modal';
import '@typeform/embed/build/css/slider.css';

const Slider = (props) => <Modal create={createSlider} {...props} />;

export default Slider;
