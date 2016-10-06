import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import StoryIndexContainer from './stories/story_index_container';

const _redirectIfLoggedIn = () => {
  if(window.currentUser){
    hashHistory.push("/")
  }
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StoryIndexContainer} />
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
