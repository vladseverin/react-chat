import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoutButton from './LogoutButton.jsx';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - 320px)',
    position: 'fixed',
  },
});

const ChatHeader = ({ classes, logout }) => (
  <AppBar className={classes.appBar} >
    <Toolbar>
      <Grid container spacing={24} direction='row' justify='space-between' alignItems='center' wrap='nowrap'>
        <Grid item>
          <Typography variant="title" color="inherit" noWrap>
            Juicy Chat
          </Typography>
        </Grid>
        <Grid item> 
          <LogoutButton logout={logout}/>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
