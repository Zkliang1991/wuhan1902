import "./index.scss";
import React, { Component } from "react";
import {
  Tabs,
  WhiteSpace,
  WingBlank,
  Flex,
  Accordion,
  List
} from "antd-mobile";

class LyraList extends Component {
  render() {
    //   console.log(this.props);
    const { item } = this.props;
    return (
      <div className="donghua" >
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
            <WhiteSpace size="lg" />
            <WingBlank size="md">
              <img
                src={require("@/assets/images/list1.png")}
                alt=""
                width="100%"
              />
            </WingBlank>
            <WhiteSpace size="lg" />
          </div>
          <div className="list-right">
            <p style={{ fontWeight: "bolder" }}>{item.name}</p>
            <p style={{ color: "#FF8500", fontSize: "14px" }}>
              {item.star}星 | 5.0
            </p>
            <p>
              {item.brand.map((item, i) => {
                return (
                  <span
                    key={i}
                    className="pingpai"
                    style={{
                      fontSize: "8px",
                      color: "#FF8500",
                      display: "inline-block",
                      border: "1px solid #FF8500",
                      padding: "0px 2px",
                      margin: "0px 2px",
                      borderRadius: "4px"
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </p>

            <p style={{ fontSize: "12px", color: "#8B8B8B" }}>
              近期开课：{item.course[0].name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class LyraList1 extends Component {
    render() {
      //   console.log(this.props);
      const { item } = this.props;
      return (
        <div className="donghua" >
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
              <WhiteSpace size="lg" />
              <WingBlank size="md">
                <img
                  src={require("@/assets/images/list1.png")}
                  alt=""
                  width="100%"
                />
              </WingBlank>
              <WhiteSpace size="lg" />
            </div>
            <div className="list-right">
              <p style={{ fontWeight: "bolder" }}>{item.course[0].name}</p>
              <p style={{ color: "#FF8500", fontSize: "14px" }}>
                {item.star}星 | 5.0
              </p>
              <p style={{ color: "#FF602F", fontSize: "14px" }} >￥{item.course[0].price}</p>
              <p style={{ fontSize: "12px", color: "#8B8B8B" }} >开课日期：{item.course[0].startTime} </p>
  
              <p style={{ fontSize: "12px", color: "#8B8B8B" }}>
                教学琴馆：{item.name}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

export  {LyraList,LyraList1};
