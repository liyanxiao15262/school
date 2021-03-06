/**
 * Created by 39588 on 2017/7/19.
 */
import React,{Component} from 'react';
import './foot.css';

class Bot extends Component {
    constructor() {
        super();
        this.state = {
            url:"http://www.bipt.edu.cn/pub/bipt/images/gb2013/logo.jpg",
            con: [
                {cons: "公元1978年9月，在北京西南燕山脚下，从北京石油化工专科学校传出的第一缕书声，漫过历史的长空，凝聚成今日北京石油化工学院一页页艰辛而又闪光的记忆。"},
                {cons: "伴随着国家改革开放的步伐，一代又一代石化学人薪火相传、荜路蓝缕，谱写出一曲曲奋进的绚丽华章。如今的北京石油化工学院已成为能适应国家支柱产业和首都经济与社会发展需要的，以工为主，理、工、经、管、文相结合，多学科相互渗透、协调发展、具有鲜明工程实践特色的普通高等学校。"},
                {cons: "北京石油化工学院前身是1978年创建的北京石油化工专科学校和北京化工学院第二分院。1985年，学校划归中国石油化工总公司管理；1992年，在北京石油化工专科学校基础上建立了北京石油化工学院；2000年，北京石油化工学院划归北京市人民政府管理。"},
                {cons: "学校发扬“实事求是、与时俱进、勤奋实干、自强不息”的精神，遵循以学生为本的办学理念，以追求真理、培育人才、研究学术、传承文明、服务社会为己任，立足北京、面向全国，服务能源产业和区域经济社会发展，强化“崇尚实践、知行并重”的实践育人特色，努力将学校建成高素质应用型人才培养、高水平应用研究和成果转化、高质量社会服务、先进文化引领的重要基地。"}
            ]

        }

    }
    render(){
        return <div className="lyx_foot">
                    <div>
                        <img src={this.state.url} alt=""/>
                        {this.state.con.map(function(x,i){
                                return <p key={i}>{x.cons}</p>
                            })
                        }
                    </div>
                </div>
    }
}
export default Bot;