/**
 * Created by 苹果 on 2017/7/19.
 */
import React, { Component } from 'react';
import './Vappreciate.css';
class Vappreciate extends Component {
    constructor(props){
        super(props);
        this.state={
            movie:[
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
                },
                {
                    mSrc:"http://zhaosheng.bipt.edu.cn/content/resource/bipt/microfilm/170329235707yy58.jpg",
                    mName:"你离我很近",
                    mType:"微电影",
                    mTime:"发布日期：2016-12-08"
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
                                    <img src={x.mSrc} alt="" />
                                    <h2>《{x.mName}》</h2>
                                    <p>{x.mType}</p>
                                    <p>{x.mTime}</p>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="kt-app-btn">
                    <a href="http://zhaosheng.bipt.edu.cn/content/bipt/a23f246d-bd23-11e6-aaf1-00ff1080fe0a.htm" id="wdxlannc">查看更多视频&gt;&gt;</a>
                </div>
            </div>
        )
    }
}
export default Vappreciate;