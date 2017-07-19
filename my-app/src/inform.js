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
            mon:"7",
            month:"月",
            day:"19",
            date:"日",
            info:"尽快提交报名资料",
            enter:"报名咨询入口>>"
        }
    }
    render(){
        return <div className="lyx_inform">
                <h3>{this.state.tit}<span>{this.state.start}</span></h3>
i               <p className="lyx_time">
                    <span  className="lyx_month">{this.state.mon}</span>
                    <span>{this.state.month}</span>
                    <span className="lyx_day">{this.state.day}</span>
                    {this.state.date}
                </p>
                <p className="lyx_sub">{this.state.info}</p>
                <p className="lyx_en"><a href="" className="lyx_enr">{this.state.enter}</a></p>
            </div>
    }
};
export default Inform;
