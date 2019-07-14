import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import { Swipe } from "../../components/swipe";
import { Carousel, Flex, WhiteSpace, WingBlank } from "antd-mobile";
import ToolList from "../../components/toolList";
import {connect} from "react-redux";
import { getNews } from "../../react-redux/actions";

const SwipeItem = Swipe.Item;

@connect(
    state=>{
        return {
            news:state.data.news
        }
    }
)
class Tool extends Component {
  state = {
    banners: [
      require("@/assets/images/banner1.jpg"),
      require("@/assets/images/banner2.jpg"),
      require("@/assets/images/banner3.jpg")
    ],
    tools: [
      require("@/assets/images/tool1.png"),
      require("@/assets/images/tool2.png"),
      require("@/assets/images/tool3.png"),
      require("@/assets/images/tool4.png"),
      require("@/assets/images/tool5.png"),
      require("@/assets/images/tool6.png")
    ]
  };

        componentWillMount() {
            // console.log(this.props);
            const {
                dispatch,
                news
            }=this.props;
            if(news.length<=0){
                dispatch(getNews({
                    url:"/react-lyra/getNews"
                }));   
            }
            
        }

  render() {
    const { banners, tools } = this.state;
    console.log(this.props);
    const {news} = this.props;
    return (
      <div style={{ width: "100%" }}>
        <Head>工具/资讯</Head>
        <div style={{ width: "100%", paddingTop: "45px" }}>
          <Carousel autoplay={false} infinite>
            {banners.map((item, i) => (
              <a
                key={i}
                href="javascript:;"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={item}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            ))}
          </Carousel>
          {/* <Swipe
            id="guide"
            options={{
              speed: 1500,
              loop: false,
              pagination: {
                el: ".swiper-pagination"
              }
            }}
          >
            {banners.map((item, i) => {
              return (
                <SwipeItem key={i}>
                  <img src={item} className="g-img" alt="" />
                </SwipeItem>
              );
            })}
          </Swipe> */}
          <div>
            <Flex
              wrap="wrap"
              justify="between"
              align="baseline"
              style={{ width: "100%", height: "100%" }}
            >
              {tools.map((item, i) => {
                return (
                  <div style={{ width: "48.5%" }} key={i}>
                    <WhiteSpace size="md" />
                    <img src={item} alt="" width="100%" />
                  </div>
                );
              })}
            </Flex>
          </div>
          <WhiteSpace size="md" />
          <ToolList title="最新资讯" news={news}  />
          
        </div>
      </div>
    );
  }
}

export default Tool;
