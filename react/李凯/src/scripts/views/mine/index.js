import "./index.scss";
import React, { Component } from "react";
import {
  Icon,
  InputItem,
  WingBlank,
  WhiteSpace,
  Button,
  Flex,
  List
} from "antd-mobile";
import userInfo from "../../react-redux/mobx/userInfo";
import UpLoadImg from "../../components/uploadImg";
const Item = List.Item;

class Mine extends Component {
  componentWillMount() {
    // console.log(this,this.two)
}
  render() {
    const { mobile, isLogin } = userInfo;
    return (
      <div ref={el=>this.two=el} style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            backgroundImage: `url(${require("@/assets/images/timg.jpg")})`,
            backgroundSize: "cover",
            width: "100%",
            height: "300px"
          }}
        >
          <Flex
            style={{ height: "100%" }}
            direction="column"
            justify="center"
            align="center"
          >
            <Flex.Item>k</Flex.Item>
            <Flex.Item>
              <UpLoadImg/>
            </Flex.Item>
            <Flex.Item>
              <h1> 欢迎您：{mobile} </h1>
            </Flex.Item>
          </Flex>
        </div>
        <div>
          <List>
            <Item onClick={()=>{this.props.history.push("/collect")}} >{[<i className="icon iconfont icon-shoucang1" key="0" style={{fontSize:"18px"}} ></i>,<span key="1" style={{padding:"0 20px"}} >我的收藏</span>]}</Item>
          </List>
        </div>
        <Button
          style={{
            display: isLogin ? "none" : "block",
            backgroundColor: "#FFD500",
            borderRadius: "23.5px"
          }}
          onClick={() => {
            this.props.history.push("/login");
          }}
        >
          请登录
        </Button>
      </div>
    );
  }
}

export default Mine;
