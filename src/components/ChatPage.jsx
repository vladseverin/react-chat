import React from 'react';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Sidebar from './Sidebar.jsx';
import ChatHeader from './ChatHeader.jsx';
import Chat from './Chat.jsx';
import { chats, messages } from '../data.json';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: red[200],
      main: red[500],
      dark: red[700],
      contrastText: grey[50],
    }
  }
});

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
  <MuiThemeProvider theme={theme}>
     <div className={classes.root}>       
       <ChatHeader />
       <Sidebar chats={chats}/>
       <Chat messages={messages}/>
     </div>
   </MuiThemeProvider>
);

export default withStyles(styles)(ChatPage);
