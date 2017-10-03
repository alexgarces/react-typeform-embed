import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './example';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Example />, document.getElementById('root'));
registerServiceWorker();
