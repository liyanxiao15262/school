/**
 * Created by 39588 on 2017/7/19.
 */
import React,{Component} from 'react';
import './work.css';

class Work extends Component{
    constructor(){
        super();
        this.state={
            title:"一流的就业指导，帮你缓解就业压力",
            arr:[
                {tit:"求职经验",con:"分享"},
                {tit:"面试技巧",con:"传授"},
                {tit:"简历制作",con:"投递"},
                {tit:"就业心理",con:"调适"},
                {tit:"常见问题",con:"解答"}
            ],
            link:"查看就业指导信息>>"
        }
    }
    render(){
        return <div>
                <div className="lyx_work">
                    <h1>{this.state.title}</h1>
                    <ul className="lyx_guide">
                        {this.state.arr.map(function(x,i){
                            return <li key={i}><a href="javascript:;">{x.tit}<br/>{x.con}</a></li>
                            })
                        }
                    </ul>
                    <a href="javascript:;" className="lyx_link">{this.state.link}</a>
                </div>
                </div>
    }
}
export default Work;