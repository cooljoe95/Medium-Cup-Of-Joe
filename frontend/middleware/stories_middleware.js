import { REQUEST_STORIES, REQUEST_STORY, receiveStories, receiveStory, requestStories } from '../actions/story_actions';
import { fetchStories, fetchStory } from "../util/story_api_util";

const StoriesMiddleware = ({getState, dispatch}) => next => action => {

  switch (action.type) {
    case REQUEST_STORIES:
      const success = data => dispatch(receiveStories(data));
      fetchStories(success);
      return next(action);
    case REQUEST_STORY:
    debugger
      fetchStory(action.id, (data) => dispatch(receiveStory(data)));
      return next(action);
    default:
      return next(action);
  }
};

export default StoriesMiddleware;
