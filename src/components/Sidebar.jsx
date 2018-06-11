import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import TextField from '@material-ui/core/TextField';
import ChatList from './ChatList';
import NewChatButton from './NewChatButton';

const styles = theme => ({
  drawerPaper: {
    overflow: 'hidden',
    position: 'relative',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  input: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },
});

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    createChat: PropTypes.func.isRequired,
    isConnected: PropTypes.bool.isRequired,
  };

  state = {
    searchValue: '',
    activeTab: 0,
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase()))
      .sort((one, two) => (one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const {
      classes, chats, createChat, isConnected,
    } = this.props;
    const { activeTab, searchValue } = this.state;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <TextField
            fullWidth
            margin="normal"
            placeholder="Search chat..."
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </div>
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active}
        />
        <NewChatButton disabled={!isConnected} onClick={createChat} />
        <BottomNavigation showLabels value={activeTab} onChange={this.handleTabChange}>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
