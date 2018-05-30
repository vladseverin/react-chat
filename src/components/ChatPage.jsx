import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar.jsx';
import ChatHeader from './ChatHeader.jsx';
import Chat from './Chat.jsx';


const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default
  }
});

class ChatPage extends React.Component {
  componentDidMount(){
    const { match, fetchAllChats, fetchMyChats, setActiveChat, socketsConnect, mountChat } = this.props;

    Promise.all([ 
      fetchMyChats(),
      fetchAllChats(), 
    ])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        // If we pass a chatId, then fetch messages from chat
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId)
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const { match: { params }, setActiveChat, unmountChat, mountChat } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(nextParams.chatId)
    }
  }

  render() {
    const { 
      classes, logout, chats, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser
    } = this.props;

    return(
     <div className={classes.root}>       
        <ChatHeader 
          logout={logout} 
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          editUser={editUser}
        />
        <Sidebar 
          chats={chats}
          createChat={createChat}
        />
        <Chat 
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
     </div>
    );
  }
}
export default withStyles(styles)(ChatPage);
