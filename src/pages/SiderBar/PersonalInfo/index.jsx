import React, { Component } from 'react'
import SiderBarItemHeader from '../../../components/SiderBar/SiderBarItemHeader'

export default class PersonalInfo extends Component {
  state = {
    info: {
      alias: '熊大',
      profile: "",
      introduction: "",
    }
  }

  render() {
    return (
      <div className="mt-5">
        <SiderBarItemHeader use-btn={true} btn-text="BTN" header-text="Info" />
        <div className={['d-flex', 'flex-column align-items'].join('')}>
        
        </div>
      </div>
    )
  }
}
