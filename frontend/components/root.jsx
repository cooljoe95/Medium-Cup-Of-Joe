import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import StoryIndexContainer from './stories/story_index_container';
import StoryFormContainer from './story_form/story_form_container';
import StoryDetailShowContainer from './stories/story_detail_show_container';

const _redirectIfLoggedIn = () => {
  if(window.currentUser){
    hashHistory.push("/")
  }
}

const _redirectIfLoggedOut = () => {
  if(window.currentUser){
    return;
  }
  hashHistory.push("/login");
}


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StoryIndexContainer} />
        <Route path="/stories/new" component={StoryFormContainer} onEnter={_redirectIfLoggedOut}/>
        <Route path="/stories/:storyId" component={StoryDetailShowContainer}/>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        <Route path="*" componenet={StoryIndexContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
