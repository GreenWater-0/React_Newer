import React, { Component } from 'react'

import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class MyNavLink extends Component {
  render() {
    const {children, to} = this.props;
    return (
      <NavLink className='btn' activeClassName='btn-success' to={to} >{children}</NavLink>
    )
  }
}
