/**
 * Created by 39588 on 2017/7/17.
 */
import React, { Component } from 'react';
import './CDIO.css';

class Cdio extends Component {
    constructor(){
        super();
        this.state={
            tit:"CDIO工程教育改革试点高校",
            con:"学校创建于1978年，前身是北京石油化工专科学校和北京化工学院第二分院。2000年由中国石化集团公司划转到地方，由中央与北京市共建，以北京市管理为主。",
            cons:"经过38年的建设与发展，学校已成为一所以工为主，工、理、管、经、文相结合，",
            cos:"多学科相互渗透、协调发展、具有鲜明工程实践特色的普通高等学校。。",
            pro:"提示：是CDIO国际合作组织正式成员。",
            school:"了解北京石油化工学院>>"
        }
    }
    render(){
        return <div className="lyx_cdio">
                    <h1>{this.state.tit}</h1>
                    <p>{this.state.con}</p>
                    <p>{this.state.cons}</p>
                    <p>{this.state.cos}</p>
                    <h4>{this.state.pro}</h4>
                    <div className="lyx_un"><a href="">{this.state.school}</a></div>
                </div>
    }
};
export default Cdio;