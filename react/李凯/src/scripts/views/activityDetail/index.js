import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import {
  WhiteSpace,
  WingBlank,
  Icon,
  Button,
  SegmentedControl,
  Stepper
} from "antd-mobile";
import { connect } from "react-redux";
import { changeClassName } from "../../react-redux/actions";
import ActivitySheet from "../../components/activitySheet";

@connect(state => {
  console.log(state);
  return {
    className1: state.className.className.className1,
    className2: state.className.className.className2
  };
})
class ActivityDetail extends Component {
  activity1(class1, class2) {
    const { className1, className2, dispatch } = this.props;
    console.log(111, class1, class2);
    dispatch(changeClassName(class1, class2));
  }

  activity2(className1, className2) {}

  activity3(className1, className2) {}

  render() {
    console.log(this.props, this);
    return (
      <div>
        <Head
          left={
            <Icon
              type="left"
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          }
        >
          0元租古琴
        </Head>
        <div style={{ paddingTop: "45px" }}>
          <img
            src={require("@/assets/images/ActivityDetail.png")}
            width="100%"
            alt=""
          />
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: "#fff",
              lineHeight: "40px"
            }}
          >
            <p style={{ fontWeight: "bolder" }}>
              古琴免费认养正麟殿公益活动-0元租古琴
            </p>
            <p style={{ fontSize: "24px", color: "red" }}>￥2999~9999</p>
            <p style={{ overflow: "hidden" }}>
              快递费 ￥0.00<span style={{ float: "right" }}>北京大兴</span>
            </p>
            <WhiteSpace size="lg" />
          </div>
          <WhiteSpace size="lg" />
          <div
            style={{
              backgroundColor: "#fff",
              lineHeight: "28px",
              padding: "10px"
            }}
          >
            <p>
              支持
              <span className="span">正麟发货</span>
              <span className="span">琴馆提货</span>
              <span className="span">免费预约</span>
            </p>
            <p>
              提醒
              <span className="span">实名或古琴认证</span>
              <span className="span">高级会员</span>
            </p>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#fff",
              padding: "10px 0px",
              position: "fixed",
              left: 0,
              bottom: 0
            }}
          >
            <WingBlank>
              <Button
                style={{
                  backgroundColor: "#FFD500",
                  borderRadius: "20px",
                  color: "#fff"
                }}
                onClick={() => {
                  this.activity1("shadow", "Activity");
                }}
              >
                立即预定
              </Button>
            </WingBlank>
          </div>
          <div
            className={this.props.className1}
            ref="shadow"
            onClick={() => {
              this.activity1("shadowHide", "ActivityHide");
            }}
          />
          <ActivitySheet ac={this.props.className2} gg={this.activity1} />
        </div>
      </div>
    );
  }
}


export default ActivityDetail;
