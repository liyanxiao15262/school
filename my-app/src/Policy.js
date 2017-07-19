import React, { Component } from 'react';
import './Policy.css';
import PartOne from './PartOne';
import sydx from './img/zaoshangjianz.png';
class Policy extends Component {
    constructor(props){
        super(props);
        this.state={
            zybk:[
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"},
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"},
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"},
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"}
            ],
            plans:["北京","天津","天津","山西","内蒙古","天津","山西","内蒙古","天津"],
            xshd:[
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"},
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"},
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"},
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数"}
            ]
        }
    }
    handleMove(){
        this.refs.wcgno1.style.left="0px";
    }
    handleBack(){
        this.refs.wcgno1.style.left="-100%";
    }
    render(){
        return (
            <div className="kt-policy">
                <div className="kt-policy-box">
                    <h1>【2016年至2017年】石化资料政策发布专区（新）</h1>
                    <div className="kt-policy-top">
                        <a className="look" onClick={this.handleMove.bind(this)}>
                            <h2>石化招生简章</h2>
                            <h5>点击查看&lt;&lt;</h5>
                        </a>
                        <div className="intro-pub">
                            <div className="intro-pub-tit">
                                <div className="intro-pub-tita">信息发布&nbsp;</div>
                                <div className="intro-pub-titb">10月9日</div>
                            </div>
                            <h4><span>热点</span>志愿报考</h4>
                            <PartOne tc={this.state.zybk}/>
                        </div>
                        <div className="query">
                            <div>录取查询</div>
                            <ul>
                                <li><br /><br /><span className="check">点此查询录取信息</span><br /><br /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="kt-policy-center">
                        <div className="policy-centerA">
                            <h4>招生计划</h4><br/>
                            <ul>
                                {
                                    this.state.plans.map((x,i)=>{
                                        return <li key={i} className={i%3===2?"mz":""}><a href="javascript:;">{x}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="policy-centerB">
                            <br/><br/><h4><span>热点</span>学术活动</h4>
                            <PartOne tc={this.state.zybk}/>
                        </div>
                        <div className="policy-centerC">
                            <br /><br />
                            <ul>
                                <li className="edu">本科</li>
                                <li className="edu">研究生</li>
                                <li className="edu">继续教育</li>
                                <li className="edu">留学生</li>
                                <li className="edu-btnA"><a href="javascript:;">招生政策</a></li>
                                <li className="edu-btnB"><a href="javascript:;">志愿报考</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="policy-bottom">
                        <div className="policy-bottomA">
                            <h4>招生快讯</h4>
                            <div>
                                <ul>
                                    <li>2017年校园开放日公告</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-09</a></li>
                                    <li>2017年校园开放日公告</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-09</a></li>
                                    <li>2017年校园开放日公告</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-09</a></li>
                                    <li>2017年校园开放日公告</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-09</a></li>
                                    <li>2017年校园开放日公告</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-09</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="policy-bottomA policy-bottomB">
                            <h4>招生快讯</h4>
                            <div>
                                <ul>
                                    <li>2017北京石油化工学院2017年招生章程</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-22</a></li>
                                    <li>2017北京石油化工学院2017年招生章程</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-22</a></li>
                                    <li>2017北京石油化工学院2017年招生章程</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-22</a></li>
                                    <li>2017北京石油化工学院2017年招生章程</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-22</a></li>
                                    <li>2017北京石油化工学院2017年招生章程</li>
                                    <li className="policy-bottoma"><a href="javascript:;">05-22</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="policy-bb">
                        <img src="http://static2.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/tel.png" />&nbsp;&nbsp;
                        7*18小时免费人工咨询电话：010-81292235
                    </div>
                </div>
                <div className="wcgno1" ref="wcgno1" onClick={this.handleBack.bind(this)}>
                    <img src={sydx} />
                </div>
            </div>
        )
    }
}
export default Policy;