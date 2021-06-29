import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from './index.module.css'
export default class Content extends Component {
  render() {
    const {contactObj} = this.props;
    console.log(contactObj)
    return (
      <div className={style.content}>
        <div id='info'>
          <div>
            {contactObj.id}
          </div>
          <div>
            {contactObj.name}
          </div>
          <div>
            {contactObj.profile}
          </div>
        </div>
        <div>

          {/* TODO */}
          对话部分
        </div>
      </div>
    )
  }
}
