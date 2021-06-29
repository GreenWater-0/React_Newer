import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

export default class DialogFooter extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired,
  }

  chooseAll = (event)=>{
    const {target} = event;
    const setAllFunc = this.props.setAll;
    setAllFunc(target.checked);
  }

  deleteAllChecked = ()=>{
    if (window.confirm('确认删除所有选中？')) {
      const deleteAllCheckedFunc = this.props.deleteAllChecked;
      deleteAllCheckedFunc();
    }
  }

  render() {
    const {friends} = this.props;
    let choosedNum = friends.filter((item)=>{
      return item.isFriend === true
    }).length;
    let total = friends.length;

    return (
      <div className='d-flex align-items-center'>
        <input type='checkBox' onChange={this.chooseAll} checked={total === choosedNum && total !== 0} />
        <div>选中{choosedNum}&nbsp;/&nbsp;全部{total}</div>
        <div className='ml-auto'>
          <button type='button' className='btn btn-danger' onClick={this.deleteAllChecked}>清除所有选中</button>
        </div>
      </div>
    )
  }
}
