import "./index.scss";
import React, { Component } from 'react';
import Head from "../../components/head";
import {
    Icon,
    InputItem,
    WingBlank,
    WhiteSpace,
    Button,
    Flex,
    List
  } from "antd-mobile";

class Collect extends Component {
    render() {
        return (
            <div>
                <Head left={<Icon type="left" onClick={()=>{this.props.history.goBack()}} ></Icon>} >我的收藏</Head>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default Collect;