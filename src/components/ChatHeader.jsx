import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from './Avatar';
import ChatMenu from './ChatMenu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import UserMenu from './UserMenu.jsx';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - 320px)',
    position: 'fixed',
  },
  appBarTitle: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
  },
});

class ChatHeader extends React.Component {
  render() {
    const { 
      classes, logout, activeUser, activeChat, leaveChat, deleteChat, editUser 
    } = this.props; 

    return (
      <AppBar className={classes.appBar} >
        <Toolbar>
          <Grid container spacing={24} direction='row' justify='space-between' alignItems='center' wrap='nowrap'>
            <Grid item>

              {activeChat ? (
                <React.Fragment>
                  <Avatar colorFrom={activeChat._id}>
                    {activeChat.title}
                  </Avatar>
                  <Typography variant="title" className={classes.appBarTitle}>
                    {activeChat.title}
                    <ChatMenu
                      activeUser={activeUser}
                      onLeaveClick={() => leaveChat(activeChat._id)}
                      onDeleteClick={() => deleteChat(activeChat._id)}
                    />
                  </Typography>
                </React.Fragment>
              ) : (
              <Typography variant="title" color="inherit" noWrap>
                Juicy Chat
              </Typography>
              )}

            </Grid>
            <Grid item> 
              <UserMenu
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
