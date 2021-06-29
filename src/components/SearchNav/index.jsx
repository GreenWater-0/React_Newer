import React, { Component } from 'react'
import style from './index.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

export default class SearchNav extends Component {
  // 对类型和必要性作出限制
  static propTypes = {
    addFriend: PropTypes.func.isRequired,
  }
  // 键盘事件
  handleKeyUp = (event)=>{
    const {keyCode, target} = event;
    if (keyCode !== 13) {
      return;
    }
    else {
      const addFunc = this.props.addFriend;
      addFunc(target.value);
      target.value = '';
    }
  }
  render() {
    return (    // 返回给一个全局的控制的对象，该对象中是找不到handleKeyUp的，所以返回的时候需要指明handleKeyUp来自哪里
      <div>
        <div className="input-group mb-5 mt-5">
          <input onKeyUp={this.handleKeyUp} type="text" className="form-control" placeholder="添加，点击回车确定" />
        </div>
      </div>
    )
  }
}
