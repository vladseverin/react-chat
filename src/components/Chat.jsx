import React from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import titleInitials from '../utils/title-initials';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  messagesWrapper: {
    overflowX: 'hidden',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: 'calc(100% - 320px)',
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 3,
  },
  entryField: {
    width: '100%',
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
  wrapperHistory: {
    padding: '8px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  colorAvatar: {
    color: '#fff',
    backgroundColor: '#F44336',
  },
  colorName: {
    color: '#F44336',
    fontSize: '0.75rem',
  }
})

class Chat extends React.Component {
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
      <main className={classes.chatLayout}>
        <div className={classes.messagesWrapper} ref="messagesWrapper">
          {/* Implemented message */}
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
          {/*Implemented history block */}
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
        </div>
        {/*Implemented send message block */}
        <div className={classes.messageInputWrapper}>
          <Paper className={classes.messageInput}>
            <Input
              placeholder="Type your message..."
              fullWidth
            />
          </Paper>
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(Chat);
