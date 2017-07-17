import React, { Component } from 'react';
import './Recommend.css';
class Recommend extends Component {
    constructor(props){
        super(props);
        this.state={
            schoolRecom:[
                {
                    "menu":"化学工程学院",
                    "menu_b":"----北京石油化工----",
                    "con":"化学工程学院设有化学工程系、应用化学系、制药工程系和基础化学教"
                },
                {
                    "menu":"数理系",
                    "menu_b":"----北京石油化工----",
                    "con":"北京石油化工学院数理系成立于2000年，目前下设数学教研室"
                },
                {
                    "menu":"经济管理学院",
                    "menu_b":"----北京石油化工----",
                    "con":"经济管理学院是学校发展最快、学生人数最多的教学院之一"
                },
                {
                    "menu":"信息工程学院",
                    "menu_b":"----北京石油化工----",
                    "con":"2000年在原自动化系的基础上组建信息工程学院，现设有自动化"
                },
                {
                    "menu":"人文社科学院",
                    "menu_b":"----北京石油化工----",
                    "con":"人文社科学院是北京石油化工学院最具人文特色的教学院，下设文化教"
                },
                {
                    "menu":"思想政治教育中心",
                    "menu_b":"----北京石油化工----",
                    "con":"金融财会热门专业,毕业颁发本科学历+会计学学士学位证书;工作稳定待遇好"
                }
            ]
        }
    }
    render(){
        return (
            <div className="kt-recom">
                <div className="kt-recom-box">
                    <h1>专业院校推荐&nbsp;&middot;&nbsp;总有你感兴趣的</h1>
                    <ul>
                        {
                            this.state.schoolRecom.map((x,i)=>{
                                return <li key={i} className={i%3===2?"empty":""}>
                                    <a className="li-link">
                                        <h4>{x.menu}<br /><span>{x.menu_b}</span></h4>
                                        <p>{x.con}</p>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                    <div className="know-more">
                        <a>了解更多院系详情>></a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Recommend;