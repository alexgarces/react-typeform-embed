import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import Examples from './examples';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Examples />, document.getElementById('root'));
registerServiceWorker();
