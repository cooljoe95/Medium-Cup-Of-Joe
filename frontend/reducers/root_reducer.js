import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoriesReducer
});

export default RootReducer;
