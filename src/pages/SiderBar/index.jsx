import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import GroupList from './GroupList'
import FriendList from './FriendList'
import PersonalInfo from './PersonalInfo'


class SiderBar extends Component {

  render() {
    const {state, setDialog} = this.props;

    let showingComponent;
    switch (state.state) {
      case state.showFriendList:case '': 
        showingComponent = <FriendList setDialog={setDialog}/>;
        break;
      case state.showGroupList:
        showingComponent = <GroupList setDialog={setDialog}/>;
        break;
      case state.showPersonalInfo:
        showingComponent = <PersonalInfo setDialog={setDialog}/>;
        break;
    }
    console.log(showingComponent)
    return (
      <div>
        {showingComponent}
      </div>
    )
  }
}

export default SiderBar;
