import React, { Component } from 'react';
class PartOne extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul>
                {
                    this.props.tc.map((x,i)=>{
                        return <li key={i}><a href={x.url} target="_blank" rel="noopener noreferrer">{x.t}&nbsp;&nbsp;&nbsp;&nbsp;{x.c}</a></li>
                    })
                }
            </ul>
        )
    }
}
export default PartOne;
