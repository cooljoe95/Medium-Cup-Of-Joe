import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;
  const defaultUser = {
    user: {
      username: "can_this_name_BE_any_longer",
      password: "password"
    }
  };
  return {
    formType,
    processForm: (user) => dispatch(processForm(user)),
    guestLogin: () => dispatch(login(defaultUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
