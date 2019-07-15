

import React, { Component } from 'react';
import { Button, WhiteSpace, WingBlank } from "antd-mobile";
import "./index.scss";
const styleGuide={
    img:{
        width:"100%",
        height:"100%",
        position:"fixed",
        top:0,
        left:0,
    },
}



export  class Guide extends Component {
    gotoHome(){
        const {history} = this.props;
        history.push("/app")
        // console.log(history)
    }
    componentDidMount(){
        setTimeout(() => {
            console.log(this.refs.btn)
    this.refs.btn.style.opacity=1;
        }, 3000);
    }
    render() {
        return (
            <div style={{
                width:"100vw",
                height:"100vh"
            }}>
                <div style={styleGuide.img }>
                    <img src={require("@/assets/images/winlogo.jpg")} alt="" width="100%" height="100%"/>
                </div>
                <div className="guide-btn" ref="btn">
                <WingBlank size="xl">
                    <Button
                    
                    type="warning"
                    // inline
                    onClick={()=>this.gotoHome()}
                    >欢迎使用</Button><WhiteSpace size="xl"/>
                </WingBlank>
                        
                </div>
            </div>
        )
    }
}

