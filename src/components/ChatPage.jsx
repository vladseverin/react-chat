import React from 'react';
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

const ChatPage = ({ classes }) => (
  
     <div className={classes.root}>       
       <ChatHeader />
       <Sidebar chats={chats}/>
       <Chat messages={messages}/>
     </div>
   
);

export default withStyles(styles)(ChatPage);
