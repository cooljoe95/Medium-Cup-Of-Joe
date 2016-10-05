import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtils from './actions/session_actions';
import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.SAlogin = SessionUtils.login;
    window.SAlogout = SessionUtils.logout;
    window.SAsignup = SessionUtils.signup;
    window.store = configureStore();
    ReactDOM.render(<h1>Medium Cup Of Joe.</h1>, root);
});
