import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { fetchAllChats, fetchMyChats, setActiveChat } from '../actions/chats';
import * as fromChats from '../reducers/chats';
import ChatPage from '../components/ChatPage.jsx';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  chats: fromChats.getByIds(state.chats, state.chats.allIds),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  logout,
}, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ChatPage);
