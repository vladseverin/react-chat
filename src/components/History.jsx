import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  wrapperHistory: {
    padding: '8px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  colorName: {
    color: '#F44336',
    fontSize: '0.75rem',
  }
});

const History = ({ classes }) => (
  <div className={classes.wrapperHistory} >
    <Typography variant="caption">
      <span className={classes.colorName} >
        Severin Vladislav
              </span> left
      <Typography variant="caption">
        2 days ago
      </Typography>
    </Typography>
  </div>
);

export default withStyles(styles)(History);
