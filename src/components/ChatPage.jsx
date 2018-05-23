import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar.jsx';
import ChatHeader from './ChatHeader.jsx';
import Chat from './Chat.jsx';
import { chats, messages } from '../data.json';


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
  render() {
    const { classes, isAuthenticated, logout } = this.props;

    if (!isAuthenticated) {
      return (
        <Redirect to="/welcome" />
      );
    }

    return(
     <div className={classes.root}>       
       <ChatHeader logout={logout} />
       <Sidebar chats={chats}/>
       <Chat messages={messages}/>
     </div>
    );
  }
}
export default withStyles(styles)(ChatPage);
