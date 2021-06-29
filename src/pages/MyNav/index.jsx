import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import {Route, Switch} from 'react-router-dom'
// import MyNavLink from '../../components/MyNavLink'
import MyNavItem from './MyNavItem'
import IconFriend from '../../images/MyNav/联系人.png'
import IconGroup from '../../images/MyNav/群组.png'
import IconSelf from '../../images/MyNav/我的.png'
import IconExit from '../../images/MyNav/退出.png'
import MainIcon from '../../images/Icon.png'

class MyNav extends Component {
  state = {
    // 导航元素
    navItemList: [
      {
        alt: '个人信息',
        title: '个人信息',
        iconPath: IconSelf,
        toSiderBarState: 'info',
      },
      {
        alt: '群组',
        title: '群组',
        iconPath: IconGroup,
        toSiderBarState: 'group',
      },
      {
        alt: '好友',
        title: '好友',
        iconPath: IconFriend,
        toSiderBarState: 'friend',
      },
      {
        alt: '退出',
        title: '退出',
        iconPath: IconExit,
        toSiderBarState: ''
      }
    ]
  }

  render() {
    const {navItemList} = this.state;
    const {setSiderBarContent} = this.props;
    
    return (
      <div className="d-flex flex-column align-items-center">
          <img src={MainIcon} className="mb-3 mt-5" style={{width: "50%", objectFit: 'contain'}}/>
        {
          navItemList.map((item, index) => {
            return (
              <div key={index} onClick={()=>{return setSiderBarContent(item.toSiderBarState)}}>
                <MyNavItem iconData={item}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default MyNav;