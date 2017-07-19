/**
 * Created by 39588 on 2017/7/19.
 */
import React, { Component } from 'react';
import './score.css';

class Score extends Component {
    constructor(){
        super();
        this.state={
            arr:[{city: "海淀区>>"},{city:"北京>>"},{city:"天津>>"},{city:"河南>>"},{city:"河北>>"}
            ],
            arrs:[{area: "湖北>>"},{area: "新疆>>"},{area: "江苏>>"},{area: "山西>>"},{area: "陕西>>"},{area: "其他地区>>"}],
            img:"http://static1.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/xqbg2.jpg"
        }
    }
    render(){
        return <div className="lyx_score">
                    <h1>各区县报名录取分数线查询入口</h1>
                    <ul className="lyx_city">
                        {this.state.arr.map(function(x,i){
                            return <li key={i}><a href="javascript:;">{x.city}</a></li>
                            })
                        }
                    </ul>
                    <ul className="lyx_area">
                        {this.state.arrs.map(function(x,i){
                            return <li key={i}><a href="javascript:;">{x.area}</a></li>
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
