import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
  }
});

const NewChatButton = ({ classes }) => (
    <Button variant="fab" color="primary" aria-label="add" className={classes.newChatButton}>
      <AddIcon />
    </Button>
);

export default withStyles(styles)(NewChatButton);
