/**
 * Created by 苹果 on 2017/7/19.
 */
import React, { Component } from 'react';
import './Scenery.css';
class Scenery extends Component {
    constructor(props){
        super(props);
        this.state={
            scenery:[
                {t:"春",adj:"春之幽",poea:"春阴垂野草青青",poeb:"时有幽花一树明",poec:"晚泊孤舟古祠下",poed:"满川风雨看潮生",c:"scenery-a"},
                {t:"夏",adj:"夏之凝",poea:"毕竟西湖六月中",poeb:"风光不与四时同",poec:"接天莲叶无穷碧",poed:"映日荷花别样红",c:"scenery-b"},
                {t:"秋",adj:"秋之艳",poea:"春花富红紫",poeb:"黄菊与秋宜",poec:"风劲幽香怯",poed:"露曦寒艳滋",c:"scenery-c"},
                {t:"冬",adj:"冬之傲",poea:"大雪压青松",poeb:"青松挺且直",poec:"要知松高洁",poed:"待到雪化时",c:"scenery-d"}
            ]
        }
    }
    render(){
        return (
            <div className="kt-scenery">
                <div className="kt-scenery-box">
                    <h5>我们是时候该公开了……</h5>
                    <h2>美景如画</h2>
                    <h1>春来喜看燕双翩， 夏至同赏并蒂莲， 秋风起处枫如火， 冬雪飘飞漫九天</h1>
                    {
                        this.state.scenery.map((x,i)=>{
                            return (
                                <div className={x.c} key={i}>
                                    <div>
                                        <p className="sceneryT">{x.t}</p>
                                        <p className="sceneryAdj">{x.adj}</p>
                                        <p className="sceneryPoe">{x.poea}<br/>{x.poeb}<br/>{x.poec}<br/>{x.poed}</p>
                                        <a href="javascript:;" className="sceneryCheck">查看{x.t}景&gt;&gt;</a>
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
export default Scenery;