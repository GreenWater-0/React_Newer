import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from '../../../images/female.jpg'

export default class GroupList extends Component {
  state = {
    groupList: [
      {
        gid: 'g-01',
        gname: '群聊1',
        profile: Profile,
      },
      {
        gid: 'g-02',
        gname: '群聊2',
        profile: Profile,
      },
      {
        gid: 'g-03',
        gname: '群聊3',
        profile: Profile,
      },
      {
        gid: 'g-04',
        gname: '群聊4',
        profile: Profile,
      }
    ]
  }

  openDialog = (groupId)=>{
    console.log('打开和', groupId, '的对话')
  }

  render() {
    const {groupList} = this.state;
    return (
      <div className={['container', 'mt-5'].join(' ')}>
        {
          groupList.map((group, index)=>{
            return (
              <div className={['btn row d-flex bg-primary rounded m-1 align-items-center'].join(' ')} key={index} onClick={()=>{return this.openDialog(group.gid)}}>
                  <img className={['col-sm-5', 'rounded-circle'].join(' ')} style={{padding: 0, width: '100%', maxWidth: '3rem'}} src={group.profile} />
                <div className='d-flex col-sm-7 justify-content-center'>
                  <div>
                    {group.gname}
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
