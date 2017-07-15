/**
 * Created by 39588 on 2017/7/14.
 */
import React, { Component } from 'react';
import './banner.css';
import { Carousel } from 'react-bootstrap';
import img from './2.jpg';
import pic from './3.jpg';
import image from './4.jpg';

class Banner extends Component {
    render() {
        return (
            <div className="lyx_banner">
                <Carousel>
                    <Carousel.Item>
                        <img alt="" src={img} className="lyx_img"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="" src={pic} className="lyx_img"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="" src={image} className="lyx_img"/>
                    </Carousel.Item>
                </Carousel>
                <div className="lyx_box">
                    <div className="lyx_history">
                        <h3>石化历史</h3>
                        <p>北京石油化工学院位于京南大兴新区，是北京市属普通高等学校，是首批获准实施“服务国家特殊需求人才培养项目”的高校，是首批“卓越工程师教育培养计划”、CDIO工程教育改革试点高校、高水平运动员招生资格高校，是CDIO国际合作组织正式成员。学校创建于1978年，前身是北京石油化工专科学校和北京化工学院第二分院。2000年由中国石化集团公司划转到地方，由中央与北京市共建，以北京市管理为主。经过38年的建设与发展，学校已成为一所以工为主，工、理、管、经、文相结合，多学科相互渗透、协调发展、具有鲜明工程实践特色的普通高等学校。</p>
                    <p>学校现有各类全日制在校生7491人（其中，本科生7115人、专业学位硕士研究生189人、联合培养硕士研究生180人，博士研究生7人），设14个教学院（系、部、中心）。学校拥有化学工程和机械工程两个领域的专业硕士学位授予权。有29个本科专业，涵盖工学、理学、管理学、经济学</p>
                </div>
                </div>
            </div>
    );
    }
}

export default Banner;