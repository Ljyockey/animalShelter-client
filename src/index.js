import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AdoptAPet from './components/AdoptAPet';
import store from './components/store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <AdoptAPet />
    </Provider>, 
    document.getElementById('root'));
    registerServiceWorker();
