import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import siteNav from './nav.js';
import * as serviceWorker from './serviceWork';



ReactDOM.render(
    <siteNav />,
    document.getElementById('root')
);

serviceWorker.unregister();