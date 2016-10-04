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

window.user = {username: "1", password: "password"};
window.success = (data) => console.log(data);
window.errors = (errors) => console.log(errors);
