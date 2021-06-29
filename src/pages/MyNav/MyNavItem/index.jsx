import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import style from './index.module.css'
import {withRouter} from 'react-router-dom'

class MyNavItem extends Component {

  render() {
    const {iconData} = this.props;
    return (
      <div className={[style.iconBox, 'mb-3', 'mt-3'].join(' ')}>
        <img className={[style.icon].join(' ')} src={iconData.iconPath} title={iconData.title} alt={iconData.alt} />
      </div>
    )
  }
}

export default withRouter(MyNavItem);
