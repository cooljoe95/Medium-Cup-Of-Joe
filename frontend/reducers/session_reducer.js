import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultSession = {
  currentUser: null,
  errors: []
};

export default (state = _defaultSession, action={}) => {
  switch(action.type){
    case(RECEIVE_ERRORS):
      return {currentUser: null, errors: merge([], action.errors)};
    case(RECEIVE_CURRENT_USER):
      const newCurrentUser = merge({}, {currentUser: action.currentUser});
      window.currentUser = newCurrentUser.currentUser;
      return {currentUser: newCurrentUser.currentUser, errors: []};
    case(LOGOUT):
      window.currentUser = null;
      return {currentUser: null, errors: []};
    default:
      return state;
  }
};
