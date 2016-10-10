import { RECEIVE_STORIES, RECEIVE_STORY } from "../actions/story_actions";
import merge from 'lodash/merge';

const _defaultState = {
  stories: {}
};

const StoriesReducer = (state = {}, action={}) => {
  switch (action.type) {
    case RECEIVE_STORIES:
      return merge(_defaultState, {stories: action.stories}).stories;
    case RECEIVE_STORY:
      const newStory = {[action.story.id]: action.story};
      return merge({}, state, newStory);
    default:
      return state;
  }
};
export default StoriesReducer;
