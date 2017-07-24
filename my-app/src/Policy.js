import React, { Component } from 'react';
import './Policy.css';
import PartOne from './PartOne';
class Policy extends Component {
    constructor(props){
        super(props);
        this.state={
            zybk:[
                {"t":"[2016-06-13]","c":"2013-2015年各省录取分数","url":"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/4df60255-bdb8-11e6-b799-00ffb0461d0a.htm"},
                {"t":"[2015-06-23]","c":"2015年北京计划及近三年分数","url":"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/3952d549-bc52-11e6-9243-00ffc0f9fe0a.htm"},
                {"t":"[2014-05-13]","c":"模拟报考系统，助您一臂之力！","url":"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/847c4c83-bdb8-11e6-b799-00ffb0461d0a.htm"},
                {"t":"[2014-05-09]","c":"平行志愿也有风险 最好服从专业调剂","url":"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/a0ed8c8f-bdb8-11e6-b799-00ffb0461d0a.htm"}
            ],
            plans:[
                {address:"北京",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=110000"},
                {address:"天津",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=120000"},
                {address:"河北",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=130000"},
                {address:"山西",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=140000"},
                {address:"内蒙古",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=150000"},
                {address:"辽宁",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=210000"},
                {address:"吉林",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=220000"},
                {address:"黑龙江",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=230000"},
                {address:"上海",url:"http://zhaosheng.bipt.edu.cn/content/bipt/424383d6-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2017&vepd_sf=310000"}
            ],
            xshd:[
                {"t":"[2014-05-08]","c":"高考填志愿：文科生不妨考虑工科院校",url:"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/b64375ad-bdb8-11e6-b799-00ffb0461d0a.htm"},
                {"t":"[2014-04-10]","c":"北京实行平行志愿组后如何填报志愿",url:"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/ce50a458-bdb8-11e6-b799-00ffb0461d0a.htm"},
                {"t":"[2014-01-06]","c":"2008-2013年北京地区录取最低分",url:"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/e2e5f549-bdb8-11e6-b799-00ffb0461d0a.htm"},
                {"t":"[2013-06-06]","c":"北京地区2013年专业报考顺序指导",url:"http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/1339fa52-bdb9-11e6-b799-00ffb0461d0a.htm"}
            ],
            Newsflash:[
                {c:"2017级普通本科新生入学指南",a:"2017-05-12",url:"http://zhaosheng.bipt.edu.cn/content/bipt/3cf6208a-6e8b-11e7-8f3a-94188282f954.htm"},
                {c:"2017年北京地区各专业录取分数",a:"2017-07-22",url:"http://zhaosheng.bipt.edu.cn/content/bipt/6704bf45-6e89-11e7-8f3a-94188282f954.htm"},
                {c:"2017录取进程及分数（实时更新）",a:"2017-07-17",url:"http://zhaosheng.bipt.edu.cn/content/bipt/faf62a23-6ac8-11e7-8f3a-94188282f954.htm"},
                {c:"2017年本科招生录取工作承诺书",a:"2017-07-13",url:"http://zhaosheng.bipt.edu.cn/content/bipt/f74aac60-678d-11e7-8f3a-94188282f954.htm"},
                {c:"“30个不得”招生工作禁令",a:"2017-07-13",url:"http://zhaosheng.bipt.edu.cn/content/bipt/e0da35ba-678b-11e7-8f3a-94188282f954.htm"}
            ],
            NewsflashA:[
                {c:"招生工作“十公开”",a:"2017-07-13",url:"http://zhaosheng.bipt.edu.cn/content/bipt/09471c2e-678a-11e7-8f3a-94188282f954.htm"},
                {c:"2017年普通本科招生录取安排",a:"2017-07-13",url:"http://zhaosheng.bipt.edu.cn/content/bipt/d3bbfc36-6786-11e7-8f3a-94188282f954.htm"},
                {c:"2017年校园开放日公告",a:"2017-05-09",url:"http://zhaosheng.bipt.edu.cn/content/bipt/03288259-348e-11e7-8fc6-0017085c8bbe.htm"},
                {c:"2017年高水平运动队入选名单公示",a:"2017-04-25",url:"http://zhaosheng.bipt.edu.cn/content/bipt/4d47d446-2fea-11e7-96db-0017085c8bbe.htm"},
                {c:"2017年高职升本科录取原则",a:"2017-04-14",url:"http://zhaosheng.bipt.edu.cn/content/bipt/admission/e2fcee1c-2fe9-11e7-96db-0017085c8bbe.htm"}
            ]
        }
    }
    render(){
        return (
            <div className="kt-policy">
                <div className="kt-policy-box">
                    <h1>【2016年至2017年】石化资料政策发布专区（新）</h1>
                    <div className="kt-policy-top">
                        <a className="look" href="http://www.bjeea.cn/html/ckcz/tzgg/2015/0812/58817.html" target="_blank" rel="noopener noreferrer">
                            <h2>报考流程</h2>
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
                                <li><br /><br /><a className="check" href="http://zhaosheng.bipt.edu.cn/" target="_blank" rel="noopener noreferrer">点此查询录取信息</a><br /><br /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="kt-policy-center">
                        <div className="policy-centerA">
                            <h4>招生计划</h4><br/>
                            <ul>
                                {
                                    this.state.plans.map((x,i)=>{
                                        return <li key={i} className={i%3===2?"mz":""}><a href={x.url} target="_blank">{x.address}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="policy-centerB">
                            <br/><br/><h4><span>热点</span>学术活动</h4>
                            <PartOne tc={this.state.xshd}/>
                        </div>
                        <div className="policy-centerC">
                            <br /><br />
                            <ul>
                                <li className="edu"><a href="http://www.bipt.edu.cn/rcpy/bkspy/index.htm" target="_blank">本科</a></li>
                                <li className="edu"><a href="http://www.bipt.edu.cn/pub/graduate/" target="_blank">研究生</a></li>
                                <li className="edu"><a href="http://ce.bipt.edu.cn/cms/" target="_blank">继续教育</a></li>
                                <li className="edu"><a href="http://www.bipt.edu.cn/pub/gjjl/" target="_blank">留学生</a></li>
                                <li className="edu-btnA"><a href="http://zhaosheng.bipt.edu.cn/content/bipt/admissionsoPlicy/" target="_blank" rel="noopener noreferrer">招生政策</a></li>
                                <li className="edu-btnB"><a href="http://zhaosheng.bipt.edu.cn/content/bipt/volunteer/" target="_blank" rel="noopener noreferrer">志愿报考</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="policy-bottom">
                        <div className="policy-bottomA">
                            <h4>招生快讯</h4>
                            <div>
                                <ul>
                                    {
                                        this.state.Newsflash.map((x,i)=>{
                                            return (<li key={i}>
                                                <a href={x.url} target="_blank" rel="noopener noreferrer"><div>{x.c}</div><div className="policy-bottoma">{x.a}</div></a>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="policy-bottomA policy-bottomB">
                            <h4>招生快讯</h4>
                            <div>
                                <ul>
                                    {
                                        this.state.NewsflashA.map((x,i)=>{
                                            return (<li key={i}>
                                                <a href={x.url} target="_blank" rel="noopener noreferrer"><div>{x.c}</div><div className="policy-bottoma">{x.a}</div></a>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="policy-bb">
                        <img src="http://static2.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/tel.png" alt=""/>&nbsp;&nbsp;
                        7*18小时免费人工咨询电话：010-81292235
                    </div>
                </div>
            </div>
        )
    }
}
export default Policy;