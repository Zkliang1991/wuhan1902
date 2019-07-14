import "./index.scss";
import React, { Component } from "react";
import { Swipe } from "../../components/swipe";
import { Button, Carousel, WhiteSpace, WingBlank } from "antd-mobile";
import { Link } from "react-router-dom";
import {history} from "@/utils/history"
const SwipeItem = Swipe.Item;

class Guide extends Component {
  state = {
    banner: [
      require("@/assets/images/guide1.png"),
      require("@/assets/images/guide2.png"),
      require("@/assets/images/guide3.png")
    ],
    index: 0
  };

  goLyra = index => {
    const { history } = this.props;
    if (index == this.state.banner.length - 1) {
      history.push("/lyra/home");
    }
  };

  render() {
    const { banner, index } = this.state;

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Carousel
          autoplay={false}
          infinite={false}
          afterChange={index => {
            console.log(index, banner.length);
            this.setState({ index });
          }}
        >
          {banner.map((item, i) => {
            return (
              <Link
                key={i}
                to="/"
                style={{ display: "inline-block", width: "100%" }}
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
              </Link>
            );
          })}
        </Carousel>
        {index == banner.length - 1 && <Hide />}
      </div>
    );
  }
}

const Hide = () => {
  
  return (
    <div className="btnBox">
      <Button
        type="ghost"
        inline
        style={{ marginRight: "5px" }}
        className="am-button-borderfix"
        onClick={()=>{history.push("/lyra/home")}}
      >
        进入首页
      </Button>
      <Button
        type="ghost"
        inline
        style={{ marginRight: "5px" }}
        className="am-button-borderfix"
        onClick={()=>{history.push("/login")}}
      >
        马上登录
      </Button>
    </div>
  );
};

export default Guide;
