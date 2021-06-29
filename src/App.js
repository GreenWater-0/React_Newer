import React, { Component } from 'react'
// import Dialog from './components/Dialog'
// import MyNavLink from './components/MyNavLink'
import MyNav from './pages/MyNav'
import Content from './pages/Content'
import SiderBar from './pages/SiderBar'

import style from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {

  state = {
    // 显示侧边导航
    siderBarState: {
      showFriendList: 'friend',
      showGroupList: 'group',
      showPersonalInfo: 'info',
      state: 'friend',

      setState: (newState)=>{
        let {siderBarState} = this.state;
        console.log('stte:',newState)
        siderBarState.state = (newState == '' ? siderBarState.state : newState);
        this.setState({
          siderBarState: siderBarState
        })
        console.log(this)
      }
    },
    // 对话对象
    contactObj: {
      id: '',
      name: '',
      profile: '',
      setData: (id, name, profile)=>{
        // 获取到contactObj对象
        const {contactObj} = this.state;
        const newObj = {...contactObj};
        newObj.id = id;
        newObj.name = name;
        newObj.profile = profile;
        this.setData({
          contactObj: newObj,
        })
      }
    },
  }

  render() {
    const {siderBarState, contactObj} = this.state;
    console.log("this is style:",style["fullHeight"]);
    return (
      <div className={[style["full-height"], 'container', 'col-sm-12'].join(' ')}>
        <div className={['row'].join(' ')}>
          {/* 导航 */}
          <div id='nav-box' className={[style["full-height"], 'col-sm-1'].join(' ')}>
            <MyNav setSiderBarContent={siderBarState.setState} />
          </div>
          {/* 列表 */}
          <div id='obj-list-box' className={[style["full-height"], 'col-sm-3'].join(' ')}>
            <SiderBar state={siderBarState} setDialog={contactObj.setData}/>
          </div>
          {/* 内容 */}
          <div id='content-box' className={[style["full-height"], 'col-sm-8'].join(' ')}>
            <Content contactObj={contactObj}/>
          </div>
          {/* 全局蒙层 */}
          <div id='max-mark'></div>
        </div>
      </div>
      )
  }
}