import { REQUEST_STORIES, RECEIVE_STORIES, receiveStories } from '../actions/story_actions';
import { fetchStories } from "../util/story_api_util";

const StoriesMiddleware = ({getState, dispatch}) => next => action => {

  switch (action.type) {
    case REQUEST_STORIES:
      const success = data => dispatch(receiveStories(data));
      fetchStories(success);
      return next(action);
    default:
      next(action);
  }
};

export default StoriesMiddleware;
