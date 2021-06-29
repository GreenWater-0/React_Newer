import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid';
import MsgList from '../MsgList';
import SearchNav from '../SearchNav';
import DialogFooter from '../DialogFooter';

export default class Dialog extends Component {
  
  state = {
    friends: [
      {id: '001', name: '熊大', introduction: '吃饭', isFriend: true},
      {id: '002', name: '熊二', introduction: '睡觉', isFriend: true},
      {id: '003', name: '跳跳', introduction: '打豆豆', isFriend: false},
    ]
  }
  // 设置状态
  setIsFriend = (newState, id)=>{
    // 严格模式
    const {friends} = this.state;
    for (let i = 0; i < friends.length; i++) {
      if (friends[i].id === id) {
        friends[i].isFriend = newState;
        this.setState({
          friends: friends,
        })
        break;
      }
    }
  }
  // 添加好友
  addFriend = (friendName)=>{
    const {friends} = this.state;
    let newFriends = [{
      id: nanoid(),
      name: friendName,
      introduction: '🐖',
      isFriend: false,
    }, ...friends];

    this.setState({
      friends: newFriends,
    })
  };
  // 删除好友
  deleteFriend = (friendId)=>{
    // 获取好友列表
    const {friends} = this.state;
    // 
    let index = friends.findIndex((item)=>{
      return item.id === friendId
    })
    console.log('删除：',friends[index],index);
    friends.splice(index, 1);
    this.setState({
      friends: friends,
    })
  }
  // 设置所有选中/未选中
  setAll = (state)=>{
    const {friends} = this.state;
    friends.map((item)=>{
      item.isFriend = state
    })
    this.setState({
      friends: friends,
    })
  }

  deleteAllChecked = ()=>{
    const {friends} = this.state;
    let newFriends = friends.filter((item)=>{
      return item.isFriend === false;
    })
    this.setState({
      friends: newFriends,
    })
  }

  render() {
    const {friends} = this.state;
    return (
      <div>
        <SearchNav addFriend={this.addFriend}/>
        <MsgList friends={friends} setIsFriend={this.setIsFriend} deleteFriend={this.deleteFriend}/>
        <hr className="simple"/> 
        <DialogFooter friends={friends} setAll={this.setAll} deleteAllChecked={this.deleteAllChecked}/>
      </div>
    )
  }
}
