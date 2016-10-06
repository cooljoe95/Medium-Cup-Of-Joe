import { REQUEST_STORIES, RECEIVE_STORIES } from '../actions/story_actions';

const StoriesMiddleware = (store) => next => action => {
  const getState = store.getState;
  const dispatch = store.dispatch;

  switch (action.type) {
    case REQUEST_STORIES:
      console.log('time to fetch!');
      return next(action);
    default:
      next(action);
  }
};

export default StoriesMiddleware;
