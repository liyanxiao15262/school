/**
 * Created by 39588 on 2017/7/14.
 */
import React, { Component } from 'react';
import './nav.css';
import logo from './img/download.png';

class Nav extends Component {
    constructor(){
        super();
        this.state={
            arr:[
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"学校介绍"},
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"专业介绍"},
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"石化信息"},
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"报名入口"},
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"视频欣赏"},
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"美景如画"},
                {url:"http://www.bipt.edu.cn/xxgk/xxjs/index.htm",con:"分数查询"}]
        }
    }
    render() {
        return (
            <div>
                <div className="App">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <ul className="nav">
                    <div className="box">
                        {this.state.arr.map(function(x,i){
                                return <li key={i}><a href={x.url}>{x.con}</a></li>
                            })
                        }
                    </div>
                </ul>
            </div>
    );
    }
}

export default Nav;