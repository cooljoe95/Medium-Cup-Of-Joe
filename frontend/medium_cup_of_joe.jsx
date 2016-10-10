import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { login } from './actions/session_actions';
import { receiveStories, requestStories } from './actions/story_actions';
import { fetchStories, fetchAuthors } from './util/story_api_util';

import configureStore from './store/store';
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if(window.currentUser){
      const preloadedState = {
        currentUser: window.currentUser
      };
      store = configureStore({session: preloadedState});
    } else {
      store = configureStore();
    }
    window.myStore = store;
    ReactDOM.render(<Root store={store}/>, root);
});
