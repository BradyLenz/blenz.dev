import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './service-worker';
import { App } from './app';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
