/**
 * Created by 39588 on 2017/7/17.
 */
import React, { Component } from 'react';
import './inform.css';

class Inform extends Component {
    render(){
        return <div className="lyx_inform">
                <h3><span>重要通知：</span>2017年北京石油化工学院招生报名开始啦!</h3>
i               <p className="lyx_time"><span className="lyx_month">7</span>月<span className="lyx_day">19</span>日</p>
                <p className="lyx_sub">尽快提交报名资料</p>
                <p className="lyx_en"><a href="" className="lyx_enr">报名咨询入口>></a></p>
            </div>
    }
};
export default Inform;
