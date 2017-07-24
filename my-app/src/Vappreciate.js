/**
 * Created by 苹果 on 2017/7/19.
 */
import React, { Component } from 'react';
import './Vappreciate.css';
import v from './img/v.jpg';
class Vappreciate extends Component {
    constructor(props){
        super(props);
        this.state={
            movie:[
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/videos/vedio1.jpg",
                    mName:"化工学院院长李翠清",
                    mType:"视频访谈",
                    mTime:"发布日期：2016-12-08",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/6f8f374b-bd41-11e6-aaf1-00ff1080fe0a.htm"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/videos/vedio4.jpg",
                    mName:"应用化学专业负责人佟拉嘎",
                    mType:"视频访谈",
                    mTime:"发布日期：2015-01-01",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/27d85218-bde9-11e6-b799-00ffb0461d0a.htm"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/videos/vedio3.jpg",
                    mName:"机械工程院长陈家庆",
                    mType:"视频访谈",
                    mTime:"发布日期：2016-12-08",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/a65ad86b-bd42-11e6-aaf1-00ff1080fe0a.htm"
                },
                {
                    mSrc:"http://www.bipt.edu.cn/images/content/2014-11/20141104102855905667.jpg",
                    mName:"油气储运工程专业教授孙东亮",
                    mType:"视频访谈",
                    mTime:"发布日期：2015-01-01",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/0019fb09-bde8-11e6-b799-00ffb0461d0a.htm"
                },
                {
                    mSrc:"http://www.bipt.edu.cn/pub/gjjl/images/content/2016-03/20160302145807001872.jpg",
                    mName:"信息工程学院院长戴波",
                    mType:"视频访谈",
                    mTime:"发布日期：2016-12-08",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/83fbd4ff-bd42-11e6-aaf1-00ff1080fe0a.htm"
                },
                {
                    mSrc:"http://www.bipt.edu.cn/pub/gjjl/images/content/2016-03/20160302145756174702.jpg",
                    mName:"经济管理学院院长景永平",
                    mType:"视频访谈",
                    mTime:"发布日期：2015-01-01",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/129c84f1-bde8-11e6-b799-00ffb0461d0a.htm"
                },
                {
                    mSrc:v,
                    mName:"公共事业管理专业责任教授卢君",
                    mType:"视频访谈",
                    mTime:"发布日期：2015-01-01",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/08bb3dfa-bde9-11e6-b799-00ffb0461d0a.htm"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08",
                    mUrl:"http://zhaosheng.bipt.edu.cn/content/bipt/8d130b27-bd43-11e6-aaf1-00ff1080fe0a.htm"
                }
            ]
        }
    }
    render(){
        return (
            <div className="kt-vapp">
                <div className="kt-vapp-box">
                    <div className="kt-appt">
                        <h2>视频欣赏</h2>
                        <h1>春来喜看燕双翩， 夏至同赏并蒂莲， 秋风起处枫如火， 冬雪飘飞漫九天</h1>
                    </div>
                    <ul>
                        {
                            this.state.movie.map((x,i)=>{
                                return <li key={i}>
                                    <a href={x.mUrl} target="_blank" >
                                        <img src={x.mSrc} alt="" />
                                        <h2>《{x.mName}》</h2>
                                        <p>{x.mType}</p>
                                        <p>{x.mTime}</p>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="kt-app-btn">
                    <a href="http://zhaosheng.bipt.edu.cn/content/bipt/a23f246d-bd23-11e6-aaf1-00ff1080fe0a.htm" id="wdxlannc" target="_blank" rel="noopener noreferrer">查看更多视频&gt;&gt;</a>
                </div>
            </div>
        )
    }
}
export default Vappreciate;