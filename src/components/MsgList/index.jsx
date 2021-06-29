import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Msg from '../Msg';

export default class MsgList extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired,
    setIsFriend: PropTypes.func.isRequired,
  }

  render() {
    const {friends, setIsFriend, deleteFriend} = this.props;
    console.log(this.props)
    return (
      <div>
        {
          friends.map((info)=>{
            return <Msg key={info.id} info={info} setIsFriend={setIsFriend} deleteFriend={deleteFriend}/>;
          })
        }
      </div>
    )
  }
}
