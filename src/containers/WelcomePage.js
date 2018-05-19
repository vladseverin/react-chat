import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, login } from '../actions/index';
import WelcomePage from '../components/WelcomePage.jsx';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup, //: (username, password) => dispatch(signup(username, password)),
  login, //: (username, password) => dispatch(signup(username, password))
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
