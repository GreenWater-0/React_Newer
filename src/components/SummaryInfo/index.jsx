// 引入React核心库
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
//import style from './index.module.css';
import style from './index.module.css';
import profileURL from '../../images/female.jpg';

// 创建类式组件
export default class SummaryInfo extends Component{
  render (){
    const {info} = this.props;
    return (
      <div className={[style.flexRow, 'col-sm-2'].join(' ')}>
        <img className={style.profile} src={profileURL} alt='头像' title='头像'/>
        <div>
          <div className={style.alias}>{info.name}</div>
          <div className={style.introduction}>{info.introduction}</div>
        </div>
      </div>
    )
  }
}