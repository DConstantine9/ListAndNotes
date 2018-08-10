import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Field from './FieldNote.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Field />, document.getElementById('root'));
registerServiceWorker();
