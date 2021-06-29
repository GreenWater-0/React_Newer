import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from '../../../images/male.jpg'

export default class FriendList extends Component {
  state = {
    friendList: [
      {
        fid: 'f-01',
        fname: '赵',
        gender: '男',
        profile: Profile,
      },
      {
        fid: 'f-02',
        fname: '钱',
        gender: '男',
        profile: Profile,
      },
      {
        fid: 'f-03',
        fname: '孙',
        gender: '女',
        profile: Profile,
      },
      {
        fid: 'f-04',
        fname: '李',
        gender: '女',
        profile: Profile,
      }
    ]
  }

  openDialog = (friendId)=>{
    console.log('打开和', friendId, '的对话')
  }

  
  render() {
    const {friendList, setDialog} = this.state;
    return (
      <div className={['container', 'mt-5'].join(' ')}>
        {
          friendList.map((friend, index)=>{
            return (
              <div className={['btn row d-flex bg-primary rounded m-1 align-items-center'].join(' ')} key={index} onClick={()=>{return this.openDialog(friend.fid)}}>
                  <img className={['col-sm-5', 'rounded-circle'].join(' ')} style={{padding: 0, width: '100%', maxWidth: '3rem'}} src={friend.profile } />
                <div className='col-sm-7 justify-content-center'>
                  <div>
                    {friend.fid}
                  </div>
                  <div>
                    {friend.fname}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
