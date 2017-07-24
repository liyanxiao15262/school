import React, { Component } from 'react';
import './Introduction.css';
class Introduction extends Component {
  constructor(props){
    super(props);
    this.state={
      schoolIntro:[
        {
          "tit":"学校概况",
          "pic":"http://static4.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/xtzleft.png",
          "con":"北京石油化工学院位于京南大兴新区，是北京市属普通高等学校，是首批获准实施“服务国家特殊需求人才培养项目”的高校... ",
          "url":"http://www.bipt.edu.cn/xxgk/xxjs/73358.htm"
        },
        {
          "tit":"发展历程",
          "pic":"http://static0.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/xtzcenter.png",
          "con":"公元1978年9月，在北京西南燕山脚下，从北京石油化工专科学校传出的第一缕书声，漫过历史的长空，凝聚成今日北京石油化工学... ",
          "url":"http://www.bipt.edu.cn/xxgk/xxjs/29823.htm"
        },
        {
          "tit":"学校校训",
          "pic":"http://static1.sunlands.com/quanx/project/bj/tongjingxi/20170612114002/2807/images/xtzright.png",
          "con":"宁静致远：意为要有所作为，须静心、聚力，专心致志。语出诸葛亮《诫子书》：“非淡泊无以明志，非宁静无以致远... ",
          "url":"http://www.bipt.edu.cn/xxgk/xxjs/xiaoxun.htm"
        }
      ]
    }
  }
  render() {
    return (
     <div className="kt-intro">
     	<div className="kt-intro-box">
          <h1>学校介绍</h1>
          <div className="kt-intro-tit">北京石油化工学院前身北京石油化工专科学校在燕山创建，同时，兼办北京化工学院第二分院，开始招收本、专科生。</div>
          {
            this.state.schoolIntro.map((x,i)=>{
              return <div key={i} className={i===0?"kt-intro-left":i===1?"kt-intro-center":i===2?"kt-intro-right":""}>
                <div><img src={x.pic} alt=""/></div>
                <h3>{x.tit}</h3>
                <div className="kt-intro-con">{x.con}</div>
                <div className="kt-intro-more"><a href={x.url} target="_blank">了解全部信息>></a></div>
              </div>
            })
          }
        </div>
     </div>
    )
  }
}

export default Introduction;