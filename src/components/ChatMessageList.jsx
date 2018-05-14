import React from 'react';
import { withStyles } from 'material-ui/styles';
import ChatMessage from './ChatMessage.jsx';
import History from './History.jsx';

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'hidden',
    width: '100%',
    height: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  }
});

class CHatMessageList extends React.Component {
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
          <ChatMessage key={index} {...message} />
        ))}
        <History />
      </div>
    );
  };
};

export default withStyles(styles)(CHatMessageList);
