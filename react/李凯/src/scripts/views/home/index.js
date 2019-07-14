import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import { NavBar, Icon, WhiteSpace, WingBlank, Grid } from "antd-mobile";
import { history } from "@/utils/history";

const data = Array.from(new Array(5)).map((_val, i) => ({
  icon: [
    "icon-icon_guzheng",
    "icon-kecheng",
    "icon-huodong2",
    "icon-paihangbang",
    "icon-chanpinrenzheng"
  ],
  text: ["琴馆", "课程", "活动", "排行", "认证"]
}));

class Home extends Component {
  goTo(dataItem, index){
    console.log(dataItem, index);
    if(index==0||index==1){
      this.props.history.push("/lyra/find");
    }else if(index==2){
      this.props.history.push("/lyra/activity");
    }
  }
  render() {
    return (
      <div>
        <Head
          left={[<span key="0" onClick={()=>{console.log(11)}} >定位</span>, <Icon key="1" type="down" />]}
          right={
            <i
              style={{ fontSize: "26px" }}
              className="icon iconfont icon-saoyisaoerweimasaomasaomiao"
            />
          }
        >
          {<SearchBox />}
        </Head>
        <div style={{paddingTop:"46px"}} >
          <div style={{ backgroundColor: "#fff" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <WhiteSpace size="xl" />
              <WingBlank>
                <WingBlank>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("@/assets/images/homeGY.png")}
                    alt=""
                  />
                </WingBlank>
              </WingBlank>
            </div>
            <WhiteSpace size="xl" />
            <div>
              <Grid
                data={data}
                columnNum={5}
                hasLine={false}
                onClick={(dataItem, index)=>{this.goTo(dataItem, index)}}
                renderItem={(dataItem, index) => (
                  <div style={{ padding: "12.5px" }}  >
                    <i
                      className={"icon iconfont " + dataItem.icon[index]}
                      style={{
                        width: "75px",
                        height: "0.75rem",
                        fontSize: "24px",
                        color: "#FFD500"
                      }}
                      alt=""
                    />
                    <div
                      style={{
                        color: "#888",
                        fontSize: "0.06rem",
                        marginTop: "0.3rem"
                      }}
                    >
                      <span>{dataItem.text[index]}</span>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
          <WhiteSpace size="md" />
          <div
            style={{ backgroundColor: "#fff", width: "100%", height: "600px" }}
          />
        </div>
      </div>
    );
  }
}

const SearchBox = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#fff",
        position: "relative",
        top: "0",
        left: "0",
        lineHeight: "30px",
        borderRadius: "15px"
      }}
      onClick={() => {
        history.push("/search");
      }}
    >
      <i
        style={{ color: "#ccc", fontSize: "30px" }}
        className="icon iconfont icon-sousuo"
      />
    </div>
  );
};

export default Home;
