import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FizzBuzz from './FizzBuzz';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FizzBuzz />, document.getElementById('root'));
serviceWorker.unregister();
