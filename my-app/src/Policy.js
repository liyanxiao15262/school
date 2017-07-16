import React, { Component } from 'react';
import './Policy.css';
class Policy extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className="kt-policy">
                <div className="kt-policy-box">
                    <h1>【2016年至2017年】石化资料政策发布专区（新）</h1>
                    <div className="kt-policy-top">
                        <a className="look">
                            <h2>石化招生简章</h2>
                            <h5>点击查看&lt;&lt;</h5>
                        </a>
                        <div className="intro-pub">
                            <div className="intro-pub-tit">

                            </div>
                        </div>
                        <div className="query">
                            <div>录取查询</div>
                            <ul>
                                <li><br /><br /><span className="check">点此查询录取信息</span><br /><br /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Policy;