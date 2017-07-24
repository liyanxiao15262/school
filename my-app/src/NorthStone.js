/**
 * Created by 苹果 on 2017/7/19.
 */
import React, { Component } from 'react';
import './Abroad.css';
import imga from './img/a.jpg';
import imgb from './img/b.jpg';
import imgc from './img/c.jpg';
import imgd from './img/d.jpg';
class NorthStone extends Component {
    constructor(props){
        super(props);
        this.state={
            abroad:[
                {aName:"北京石化成人高考教育",aT:"招生简章",aC:"北京石油化工学院继续教育学院开展专、本科成人教育。继续教育学院成立至今，已为社会培养了大量的学用结合的实用型高级技术人才和综合素质较高的管理人才。",c:"abroada",img:imga,r:"zsjza"},
                {aName:"北京石化成人高考教育",aT:"招生章程",aC:"北京石油化工学院位于京南大兴新区，是北京市属普通高等学校，是首批获准实施“服务国家特殊需求人才培养项目”的高校，是首批“卓越工程师教育培养计划”",c:"abroadb",img:imgb,r:"zsjzb"},
                {aName:"北京石化成人高考免试生",aT:"招生简章",aC:"为了保证本院成人高等教育招生工作的顺利进行，规范招生行为，维护考生合法权益，提高生源质量，依照《北京市招生考试委员会关于做好2017年北京市成人高校招生工作的通知》",c:"abroadc",img:imgc,r:"zsjzc"},
                {aName:"北京石化成人高考免试生",aT:"招生章程",aC:"北京石油化工学院是面向全国招生的普通高校。开展专、本科成人教育。形成了多学科、多层次、多形式办学发展的格局。自北京石油化工学院继续教育学院成立至今",c:"abroadd",img:imgd,r:"zsjzd"}
            ]
        }
    }
    move(x){
        this.refs[x].style.left="0px";
    }
    back(x){
        this.refs[x].style.left="-100%";
    }
    render() {
        return (
            <div className="kt-abroad">
            <div className="kt-abroad-box">
            <h2>招生简章</h2>
            <h1>北京石油化工学院二〇一七成人高等教育</h1>
            {
                this.state.abroad.map((x,i)=>{
                return (
            <div className={x.c} key={i}>
            <div>
            <p className="kt-abroadN">{x.aName}<br/>{x.aT}</p>
        <p className="kt-abroadC">{x.aC}</p>
        <a href="javascript:;" className="ab-check" onClick={this.move.bind(this,x.r)}>查看全部信息&gt;&gt;</a>
        </div>
        </div>
    )
    })
    }
    </div>
        {
            this.state.abroad.map((x,i)=>{
            return (
        <div className="wcgno1" key={i} ref={x.r} onClick={this.back.bind(this,x.r)}><img src={x.img}/></div>
    )
    })
    }
    </div>
    )
    }
}
export default NorthStone;
/**
 * Created by 苹果 on 2017/7/24.
 */
