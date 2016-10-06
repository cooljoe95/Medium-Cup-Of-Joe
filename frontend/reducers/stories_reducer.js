import { RECEIVE_STORIES } from "../actions/story_actions";

const StoriesReducer = (state = {}, action={}) => {
  switch (action.type) {
    case RECEIVE_STORIES:
      return action.stories;
    default:
      return state;
  }
};
export default StoriesReducer;
