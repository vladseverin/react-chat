import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import titleInitials from '../utils/title-initials';

import History from './History.jsx';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'hidden',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrapperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginLeft: 0,
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
    order: -1
  },
  colorAvatar: {
    color: '#fff',
    backgroundColor: '#F44336',
  },
  colorName: {
    color: '#F44336',
    fontSize: '0.75rem',
  }
});

class MessagesList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;
    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages && messages.map((message, index) => (
          <div key={index} className={message.sender === "me" ?
            classNames(classes.messageWrapperFromMe, classes.messageWrapper) :
            classes.messageWrapper}>
            <Avatar className={classes.colorAvatar}>
              {titleInitials(message.sender)}
            </Avatar>
            <Paper className={message.sender === "me" ?
              classNames(classes.messageFromMe, classes.message) :
              classes.message}>
              <Typography variant="caption" className={classes.colorName}>
                {message.sender}
              </Typography>
              <Typography variant="body1" >
                {message.content}
              </Typography>
              <Typography variant="caption">
                2 days ago
                </Typography>
            </Paper>
          </div>
        ))}
        <History />
      </div>
    );
  };
};

export default withStyles(styles)(MessagesList);
