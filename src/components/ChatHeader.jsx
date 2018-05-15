import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    width: 'calc(100% - 320px)',
    position: 'fixed',
  },
});

const ChatHeader = ({ classes }) => (
  <AppBar className={classes.appBar} >
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        Juicy Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
