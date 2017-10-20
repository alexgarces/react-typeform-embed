import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Examples from './examples';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Examples />, document.getElementById('root'));
registerServiceWorker();
