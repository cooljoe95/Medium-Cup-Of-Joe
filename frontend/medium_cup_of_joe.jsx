import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtils from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.SAlogin = SessionUtils.login;
    window.SAlogout = SessionUtils.logout;
    window.SAsignup = SessionUtils.signup;
    ReactDOM.render(<h1>Medium Cup Of Joe. Does Automatic deployment Work?</h1>, root);
});

window.user = {username: "1", password: "password"};
window.success = (data) => console.log(data);
window.errors = (errors) => console.log(errors);
