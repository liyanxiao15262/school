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
                {class:"a",con:"学校介绍"},
                {class:"a",con:"专业介绍"},
                {class:"a",con:"石化信息"},
                {class:"a",con:"报名入口"},
                {class:"a",con:"视频欣赏"},
                {class:"a",con:"美景如画"},
                {class:"a",con:"分数查询"}]
        }
    }
    componentDidMount(){
        let btn=document.getElementsByClassName("a");
        let tim=null;
        let speed=0;
        for(let i=0;i<btn.length;i++){
            btn[i].index=i;
            btn[i].onclick=function () {
                this.index==0?move(594):null;
                this.index==1?move(1164):null;
                this.index==2?move(1744):null;
                this.index==3?move(2614):null;
                this.index==4?move(3331):null;
                this.index==5?move(3985):null;
                this.index==6?move(4535):null;
            }
        }
        function  move(numScro) {
            clearInterval(tim);
            tim = setInterval(function () {
                var scrollT = document.documentElement.scrollTop ||
                    document.body.scrollTop;
                speed = (numScro - scrollT) / 10;
                speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
                if ((speed == 1||speed == -1)&&numScro==numScro) {
                    clearInterval(tim);
                    return false;
                } else {
                    window.scrollBy(0, speed)
                }
            }, 20)
        }
    }
    render() {
        return (
            <div>
                <div className="lyx_App">
                    <img src={logo} alt="logo" className="lyx_logo"/>
                </div>
                <ul className="lyx_nav">
                    <div className="lyx_Box">
                        {this.state.arr.map(function(x,i){
                                return <li key={i}>
                                            <a className={x.class}>{x.con}</a>
                                        </li>
                            })
                        }
                    </div>
                </ul>
            </div>
    );
    }
}

export default Nav;