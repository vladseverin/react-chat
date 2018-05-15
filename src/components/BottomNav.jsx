import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';

class BottomNav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state;
    return (
      <BottomNavigation showLabels value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
      </BottomNavigation>
    );
  }
}

export default BottomNav;
