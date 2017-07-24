/**
 * Created by 39588 on 2017/7/19.
 */
import React,{Component} from 'react';
import './center.css';
import { Table } from 'react-bootstrap';

class Center extends Component{
    constructor(){
        super();
        this.state={
            title:"主考院校专业查询中心",
            tit:[{con:"化学工程"},{con:"机械工程"},{con:"信息工程"},{con:"经济管理"},{con:"人文"},{con:"材料科学工程"},{con:"安全工程"},{con:"外语系"},{con:"数理系"}],
            arr:[
                    ["化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系"],
                    ["化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程","化学工程"],
                    ["化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程"],
                    ["化学工程系","化学工程系","","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系"],
                    ["化学工程系","化学工程系","","化学工程系","化学工程系","化学工程系","化学工程系","化学工程系",""],
                    ["化学工程系","化学工程系","","化学工程系","","化学工程系","化学工程系","",""]
            ]
        }
    }
    render(){

        return <div className="lyx_center">
                    <div>
                        <h1>{this.state.title}</h1>
                        <Table striped bordered condensed hover id="lyx_table">
                            <thead>
                                <tr>
                                    {this.state.tit.map(function(x,k){
                                        return <th key={k}>{x.con}</th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
        {this.state.arr.map(function (x,i) {
            return <tr key={i}>
                {x.map(function (z,k) {
                    return <td key={k}>{z}</td>
                })}
                </tr>
        })}
                            </tbody>
                        </Table>
                    </div>
                </div>
    }
}
export default Center;