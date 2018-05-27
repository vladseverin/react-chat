import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import TextField from '@material-ui/core/TextField';
import ChatList from './ChatList.jsx';
import NewChatButton from './NewChatButton.jsx';

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
    marginBottom: 8
  },
});

class Sidebar extends React.Component {
  state = {
    searchValue: '',
    activeTab: 0,
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab })
  }

  filterChats = (chats) => {
    const { searchValue } = this.state;

    // console.log(chats.map(chat => typeof chat.title));

    // if (chats.map(chat => typeof chat.title === undefined) ) return;

    return chats
      .filter(chat => chat.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  }

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }
  
  render () {
    const { classes, chats, createChat } = this.props;
    const { activeTab, searchValue } = this.state;

    return (
      <Drawer variant="permanent"
        classes={{
          paper: classes.drawerPaper,
      }}>
        <div className={classes.drawerHeader} >
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
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)} 
          activeChat={chats.active}
        /> 
        <NewChatButton onClick={createChat}/>
        <BottomNavigation showLabels value={activeTab} onChange={this.handleTabChange}>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
