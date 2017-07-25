/**
 * Created by 39588 on 2017/7/24.
 */
import React, { Component } from 'react';
import './qq.css';
import tx from './img/tx.jpg'
class Talk extends Component {
    handleNone(){
        this.refs.ktt_talk.style.display="none";
        this.handleBlock();
    }
    handleDrag(e){
        var ev = e || window.event;
        var _this=this;
        var l = ev.clientX - _this.refs.ktt_talk.offsetLeft;
        var t = ev.clientY - _this.refs.ktt_talk.offsetTop;
        document.onmousemove=function(e){
            var ev = e || window.event;
            var x = ev.clientX - l;
            var y = ev.clientY - t;
            var maxx = window.innerWidth - _this.refs.ktt_talk.offsetWidth;
            var maxy = window.innerHeight - _this.refs.ktt_talk.offsetHeight;
            x = x<0?0:x;
            y = y<0?0:y;
            x = x>maxx?maxx:x;
            y = y>maxy?maxy:y;
            _this.refs.ktt_talk.style.left = x + 'px';
            _this.refs.ktt_talk.style.top = y  + 'px';
        }
        document.onmouseup= function(){
            document.onmousemove= null;
            document.onmouseup= null;
        }
        return false;
    }
    componentDidMount(){
        let qq=document.getElementById("lyx_qq");
            setTimeout(function(){
                qq.style.display="block"
            }, 30000)
    }
    handleBlock(){
        var _this=this;
        setTimeout(function () {
            _this.refs.ktt_talk.style.display="block";
        },3000)
    }
    render(){
        return (
            <div>
                <div className="lyx_talk"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=765483472&site=qq&menu=yes" id="lyx_qq"><img src="http://wpa.qq.com/pa?p=2:765483472:53" alt="点击这里给我发消息" title="点击这里给我发消息"/></a></div>
                <div className="ktt_talk" ref="ktt_talk" onMouseDown={this.handleDrag.bind(this)}>
                    <h2><span className="kt_t">北京石油化工学院</span><button className="kt_close" onClick={this.handleNone.bind(this)}>×</button></h2>
                    <div className="kt_help">
                        <div className="tx"><img src={tx} /></div>
                        <p>您好，欢迎光临北京石油化工学院<br />请问有什么可以帮到你的吗？</p>
                    </div>
                    <h3><button className="kt_next" onClick={this.handleNone.bind(this)}>下次再说</button><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=765483472&site=qq&menu=yes">QQ交谈</a></h3>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.handleBlock.bind(this)();
    }
}
export default Talk;
