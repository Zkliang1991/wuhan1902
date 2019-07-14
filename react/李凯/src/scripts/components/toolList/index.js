import "./indes.scss";
import React, { Component } from 'react';
import { Carousel, Flex, WhiteSpace, WingBlank } from "antd-mobile";

class ToolList extends Component {
    render() {
        console.log(this.props);
        const {
            title,
            news
        } = this.props;

        return (
            <div
            style={{ width: "100%", height: "", backgroundColor: "#fff" }}
          >
            <WingBlank>
              <p style={{ padding: "15px 0" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "4px",
                    height: "15px",
                    backgroundColor: "red",
                    borderRadius: "2px"
                  }}
                />
                <span style={{ padding: "0px 10px" }}>{title}</span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "8px",
                    border: "0.5px solid #ccc",
                    fontSize: "14px",
                    lineHeight: "14px",
                    float: "right"
                  }}
                >
                  更多
                </span>
              </p>
              {
                  news.map((item,i)=>{
                    return (
                        <div key={i} >
                    <img
                      src={require("@/assets/images/new.png")}
                      width="100%"
                      alt=""
                    />
                    <p style={{ padding: "10px 0 20px 0" , lineHeight:"26px" ,color:"#828282" }}>&nbsp;{item.title}</p>
                  </div>
                    )
                  })
              }
            </WingBlank>
          </div>
        );
    }
}

export default ToolList;