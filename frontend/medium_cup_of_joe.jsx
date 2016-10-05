import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login } from './actions/session_actions';

import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.OnStore = configureStore();
    window.myLogin = login;
    ReactDOM.render(<Root store={window.OnStore}/>, root);
});
