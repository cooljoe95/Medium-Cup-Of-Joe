import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import StoriesMiddleware from './stories_middleware';

const RootMiddleware = applyMiddleware(
	SessionMiddleware,
  StoriesMiddleware
);

export default RootMiddleware;
