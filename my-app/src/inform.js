/**
 * Created by 39588 on 2017/7/17.
 */
import React, { Component } from 'react';
import './inform.css';

class Inform extends Component {
    constructor(){
        super();
        this.state={
            tit:"重要通知：",
            start:"2017年北京石油化工学院招生报名开始啦!",
            name:"北京石油化工学院学籍注册",
            mon:"7",
            month:"月",
            day:"19",
            date:"日",
            info:"尽快提交报名资料",
            enter:"报名咨询入口>>"
        }
    }
    render(){
        return <div className="lyx_inform lyx_aaa">
                <h1><span>{this.state.tit}</span>{this.state.start}</h1>
                <h3 className="lyx_name">{this.state.name}</h3>
i               <p className="lyx_time">
                    <span  className="lyx_month">{this.state.mon}</span>
                    <span>{this.state.month}</span>
                    <span className="lyx_day">{this.state.day}</span>
                    {this.state.date}
                </p>
                <p className="lyx_sub">{this.state.info}</p>
                <div className="lyx_en"><a target="_blank" id="lyx_enr" href="http://wpa.qq.com/msgrd?v=3&uin=765483472&site=qq&menu=yes">{this.state.enter}</a></div>
            </div>
    }
};
export default Inform;
