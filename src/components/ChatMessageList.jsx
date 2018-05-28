import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ChatMessage from './ChatMessage.jsx';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'hidden',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    '&:after': {
      content: '""',
      height: '120px',
      display: 'block',
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 5,
  },
  noMessages: {
    textAlign: 'center'
  }
});

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);

    this.messagesWrapper = React.createRef();
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapper.current;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages, match, activeUser } = this.props;

    // If there's no active chat, then show a tip
    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start messaging…
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Global</strong> to explore communities around here.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see your recent conversations.
          </Typography>
        </Paper>
      );
    }

    return messages && messages.length ? (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages && messages.map((message, index) => (
          <ChatMessage 
            key={index}
            activeUser={activeUser}
            {...message} 
          />
        ))}
      </div>
    ) : (
      <Typography className={classes.noMessages} variant="display1">
        There is no messages yet...
      </Typography>
    );
  };
};

export default withRouter(withStyles(styles)(ChatMessageList));
