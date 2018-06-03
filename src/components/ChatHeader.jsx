import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from './Avatar.jsx';
import UserMenu from './UserMenu.jsx';
import ChatMenu from './ChatMenu.jsx';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - 320px)',
    position: 'fixed',
  },
  appBarTitle: {
    marginLeft: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
    whiteSpace: 'nowrap',
  },
});

class ChatHeader extends React.Component {
  render() {
    const { 
      classes, logout, activeUser, activeChat, leaveChat, deleteChat, editUser, isConnected, soketsDisconnect
    } = this.props; 

    return (
      <AppBar className={classes.appBar} >
        <Toolbar>
          <Grid container spacing={24} direction='row' justify='space-between' alignItems='center' wrap='nowrap'>
            <Grid container direction='row' wrap='nowrap' justify='flex-start' alignItems='center'>
              {activeChat ? (
                <React.Fragment>
                  <Avatar colorFrom={activeChat._id}>
                    {activeChat.title}
                  </Avatar>
                  <Typography variant="title" className={classes.appBarTitle}>
                    {activeChat.title}
                  </Typography>
                  <ChatMenu
                    disabled={!isConnected}
                    activeUser={activeUser}
                    onLeaveClick={() => leaveChat(activeChat._id)}
                    onDeleteClick={() => deleteChat(activeChat._id)}
                  />
                </React.Fragment>
              ) : (
              <Typography variant="title" color="inherit" noWrap>
                Juicy Chat
              </Typography>
              )}

            </Grid>
            <Grid item> 
              <UserMenu
                disabled={!isConnected}
                soketsDisconnect={soketsDisconnect}
                activeUser={activeUser}
                logout={logout}
                editUser={editUser}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(ChatHeader);
