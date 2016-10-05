import * as SessionAction from '../actions/session_actions';

export default ({ getState, dispatch }) => next => action => {
	const successCallback = (user) => dispatch(SessionAction.receiveCurrentUser(user));
	const errorCallback = (error) => dispatch(SessionAction.receiveErrors(error.responseJSON));

	switch(action.type){
		case SessionAction.LOGIN:
			SessionAction.login(action.user, successCallback, errorCallback);
			return next(action);
		case SessionAction.LOGOUT:
			SessionAction.logout(() => next(action));
			break;
		case SessionAction.SIGNUP:
			SessionAction.signup(action.user, successCallback, errorCallback);
			return next(action);
		default:
			return next(action);
	}
}
