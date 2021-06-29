import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.css"

export default class SiderBarItemHeader extends Component {
  static propTypes = {
    'header-text': PropTypes.string.isRequired,
    'use-btn': PropTypes.bool.isRequired,
    'btn-text': PropTypes.string.isRequired
  }

  render() {
    let headerText = this.props["header-text"];
    let useBtn = this.props["use-btn"];
    let btnText = this.props["btn-text"];
    return (
      <div className="container m-5">
        <div className="row">
          <div className="col-sm-5">
            <h3>{headerText}</h3>
          </div>
          <div className="col-sm-7">
            {
            (function() {
              if (useBtn) {
                return <button className="btn btn-dark">{btnText}</button>
              }
            })()
            }
          </div>
        </div>
      </div>
    )
  }
}
