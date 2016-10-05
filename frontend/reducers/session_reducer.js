import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultSession = {
  currentUser: null,
  errors: []
};

export default (state = _defaultSession, action={}) => {
  debugger
  switch(action.type){
    case(RECEIVE_ERRORS):
      return {currentUser: null, errors: merge([], action.errors)};
    case(RECEIVE_CURRENT_USER):
      return {currentUser: merge({}, {currentUser: action.user}).currentUser, errors: []};
    case(LOGOUT):
      return {currentUser: null, errors: []};
    default:
      return state;
  }
};
