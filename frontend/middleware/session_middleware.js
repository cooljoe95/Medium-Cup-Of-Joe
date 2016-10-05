import { LOGIN, LOGOUT, SIGNUP, receiveErrors, receiveCurrentUser } from '../actions/session_actions';
import { signup, logout, login } from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
	debugger
	const successCallback = (user) => dispatch(receiveCurrentUser(user));
	const errorCallback = (error) => dispatch(receiveErrors(error.responseJSON));

	switch(action.type){
		case LOGIN:
			login(action.user, successCallback, errorCallback);
			return next(action);
		case LOGOUT:
			debugger
			console.log(logout);
			logout(() => next(action));
			break;
		case SIGNUP:
			signup(action.user, successCallback, errorCallback);
			return next(action);
		default:
			return next(action);
	}
}
