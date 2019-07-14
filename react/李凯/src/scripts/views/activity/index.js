import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import {
    WhiteSpace,
    WingBlank,
  } from "antd-mobile";

class Activity extends Component {
  render() {
    return (
      <div>
        <Head>活动</Head>
        <div style={{ paddingTop: "45px" }}>
          <img
            src={require("@/assets/images/ActivityBj.png")}
            alt=""
            width="100%"
          />
          <div style={{ backgroundColor: "#fff" }} onClick={()=>{this.props.history.push("/activityDetail")}} >
            <WhiteSpace size="sm" style={{ backgroundColor: "#F5F4F0" }} />
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                overflow: "hidden"
              }}
            >
              <div className="list-left">
                <WhiteSpace size="md" />
                <WingBlank size="md">
                  <img
                    src={require("@/assets/images/ZuQin.png")}
                    alt=""
                    width="100%"
                  />
                </WingBlank>
                <WhiteSpace size="md" />
              </div>
              <div className="list-right">
                <p style={{ fontWeight: "bolder",lineHeight:'20px' }}>
                    古琴免费认养正麟殿发起古琴公益活动-0元租古琴
                </p>
                <p style={{ color: "#FF602F", fontSize: "14px" }}>
                  火爆中
                </p>
                <p style={{ fontSize: "10px", color: "#8B8B8B" }}>
                  剩余：990套
                </p>

                <p style={{ color: "#FF602F", fontSize: "14px" }}>
                  ￥2999~9999
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
