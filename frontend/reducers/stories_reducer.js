import { RECEIVE_STORIES } from "../actions/story_actions";
import merge from 'lodash/merge';

const _defaultState = {
  stories: {}
};

const StoriesReducer = (state = {}, action={}) => {
  switch (action.type) {
    case RECEIVE_STORIES:
      return merge(_defaultState, {stories: action.stories}).stories;
    default:
      return state;
  }
};
export default StoriesReducer;
