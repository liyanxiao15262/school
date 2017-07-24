/**
 * Created by 39588 on 2017/7/24.
 */
import React, { Component } from 'react';
import './qq.css';

class Talk extends Component {
    componentDidMount(){
        let qq=document.getElementById("lyx_qq");
            setTimeout(function(){
                qq.style.display="block"
            }, 30000)

    }
    render(){
        return <div className="lyx_talk"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=765483472&site=qq&menu=yes" id="lyx_qq"><img src="http://wpa.qq.com/pa?p=2:765483472:53" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></div>

    }
}
export default Talk;
