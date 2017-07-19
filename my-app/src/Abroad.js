/**
 * Created by 苹果 on 2017/7/19.
 */
import React, { Component } from 'react';
import './Abroad.css';
class Abroad extends Component {
    constructor(props){
        super(props);
        this.state={
            abroad:[
                {aName:"西那瓦大学硕士",aT:"招生简章",aC:"西那瓦国际大学ShinawatraUniversity(SIU)由泰国前总理他信·西那瓦投资创办于1996年，西那瓦国际大学的目标是成为一所注重研究、追求卓越的国际领先大学",c:"abroada"},
                {aName:"西那瓦大学工商管理学博士",aT:"招生简章",aC:"西那瓦国际大学ShinawatraUniversity(SIU)由泰国前总理他信·西那瓦投资创办于1996年，西那瓦国际大学的目标是成为一所注重研究、追求卓越的国际领先大学",c:"abroadb"},
                {aName:"泰国西那瓦大学",aT:"Shinawatra University",aC:"西那瓦国际大学ShinawatraUniversity(SIU)由泰国前总理他信·西那瓦投资创办于1996年，西那瓦国际大学的目标是成为一所注重研究、追求卓越的国际领先大学",c:"abroadc"},
                {aName:"泰国西那瓦大学",aT:"招生简章",aC:"西那瓦国际大学ShinawatraUniversity(SIU)由泰国前总理他信·西那瓦投资创办于1996年，西那瓦国际大学的目标是成为一所注重研究、追求卓越的国际领先大学",c:"abroadd"}
            ]
        }
    }
    render() {
        return (
            <div className="kt-abroad">
                <div className="kt-abroad-box">
                    <h2>留学院校</h2>
                    <h1>泰国西那瓦大学</h1>
                    {
                        this.state.abroad.map((x,i)=>{
                            return (
                                <div className={x.c} key={i}>
                                    <div>
                                        <p className="kt-abroadN">{x.aName}<br/>{x.aT}</p>
                                        <p className="kt-abroadC">{x.aC}</p>
                                        <a href="javascript:;" className="ab-check">查看全部信息&gt;&gt;</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Abroad;
