/**
 * Created by 39588 on 2017/7/20.
 */
import React,{Component} from 'react';
import './fixed.css';
import img from './er.jpg';

class Fix extends Component{
    constructor(){
        super();
        this.state={
            hot:"热门专业榜"
        }
    }
    render(){
        return <div>
                    <img src={img} alt="" className="lyx_code"/>
                    <div className="lyx_hot">
                        <span className="lyx_span">{this.state.hot}</span>
                    </div>
                </div>
    }
}
export default Fix;