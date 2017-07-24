/**
 * Created by 39588 on 2017/7/19.
 */
import React, { Component } from 'react';
import './score.css';

class Score extends Component {
    constructor(){
        super();
        this.state={
            title:"各区县报名录取分数线查询入口",
            arr:[
                {city: "海淀区>>",url:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=110000&vepd_zymc=&maxOrMin=#"},
                {city:"北京>>",url:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=110000&vepd_zymc=&maxOrMin=#"},
                {city:"天津>>",url:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=120000&vepd_zymc=&maxOrMin="},
                {city:"河南>>",url:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=410000&vepd_zymc=&maxOrMin="},
                {city:"河北>>",url:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=130000&vepd_zymc=&maxOrMin=#"}
            ],
            arrs:[
                {area: "湖北>>",src:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=420000&vepd_zymc=&maxOrMin="},
                {area: "新疆>>",src:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=650000&vepd_zymc=&maxOrMin="},
                {area: "江苏>>",src:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=320000&vepd_zymc=&maxOrMin="},
                {area: "山西>>",src:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=140000&vepd_zymc=&maxOrMin="},
                {area: "陕西>>",src:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm?vepd_year=2016&vepd_sf=610000&vepd_zymc=&maxOrMin="},
                {area: "其他地区>>",src:"http://zhaosheng.bipt.edu.cn/content/bipt/37057c75-c7f8-11e6-a80e-00163e002f0f.htm"}
            ],
            img:"http://static1.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/xqbg2.jpg"
        }
    }
    render(){
        return <div className="lyx_score">
                    <h1>{this.state.title}</h1>
                    <ul className="lyx_city">
                        {this.state.arr.map(function(x,i){
                            return <li key={i}><a href={x.url}>{x.city}</a></li>
                            })
                        }
                    </ul>
                    <ul className="lyx_area">
                        {this.state.arrs.map(function(x,i){
                            return <li key={i}><a href={x.src}>{x.area}</a></li>
                            })
                        }
                    </ul>
                    <div className="lyx_img">
                        <img src={this.state.img} alt=""/>
                    </div>
                </div>
    }
};
export default Score;
