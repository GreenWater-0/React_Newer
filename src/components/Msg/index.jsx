import React, { Component } from 'react'
import style from './index.module.css';
import PropTypes from 'prop-types';
import SummaryInfo from '../SummaryInfo';

export default class Msg extends Component {
  // 限制
  static propTypes = {
    info: PropTypes.object.isRequired,
    setIsFriend: PropTypes.func.isRequired,
  }
  // 更改状态
  changeState = (id)=>{
    return (event)=>{
      // console.log(this.props);
      const {target} = event;
      const {setIsFriend} = this.props;
      setIsFriend(target.checked, id);
    }
  }
  // 通知App删除
  handleDelete = (id)=>{
    const {deleteFriend} = this.props;
    return ()=>{
      // 删除判断
      if (window.confirm('确认删除')){
        deleteFriend(id);
      }
    }
  }

  render() {
    const {info} = this.props;
    return (
      <div className={[style.msg].join(' ')}>
        <div className='d-flex flex-row align-items-center'>
          <input id='check' type='checkBox' checked={info.isFriend} onChange={this.changeState(info.id)}/>
          <SummaryInfo info={info}/>
          <div className='ml-auto'>
            <button type='button' className={[style.delBtn, 'btn btn-danger btn-sm mr-auto'].join(' ')} onClick={this.handleDelete(info.id)}>删除</button>
          </div>
        </div>
      </div>
    )
  }
}
