import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { currentUser: window.currentUser };
      store = configureStore({session: preloadedState});
    } else {
      store = configureStore();
    }
    ReactDOM.render(<Root store={store}/>, root);
});
