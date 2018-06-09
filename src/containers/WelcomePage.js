import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, login } from '../actions/index';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup, // : (username, password) => dispatch(signup(username, password)),
  login, // : (username, password) => dispatch(login(username, password))
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
