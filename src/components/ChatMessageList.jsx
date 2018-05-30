import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage.jsx';
import History from './History.jsx';

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
});

class CHatMessageList extends React.Component {
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
    const { classes, messages } = this.props;
    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        <History />
      </div>
    );
  };
};

export default withStyles(styles)(CHatMessageList);
