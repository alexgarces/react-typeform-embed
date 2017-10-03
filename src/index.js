import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './Example';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Example />, document.getElementById('root'));
registerServiceWorker();
