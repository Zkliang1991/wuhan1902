import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import {
  WhiteSpace,
  WingBlank,
  Icon,
  Button,
  SegmentedControl,
  Stepper,
  Modal
} from "antd-mobile";
import { connect } from "react-redux";
import { changeClassName } from "../../react-redux/actions";

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

@connect(state => {
  console.log(state);
  return {
    className1: state.className.className.className1,
    className2: state.className.className.className2
  };
})
class ActivitySheet extends Component {
  state = {
    val: 1,
    i: 0,
    price: 2999,
    modal1: false,
    modal2: false
  };

  kk() {
    // console.log("kkk");
    setTimeout(() => {
      return "none";
    }, 1500);
  }

  onChanges = e => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    var i = e.nativeEvent.selectedSegmentIndex;
    this.setState({ i });
  };
  onValueChange = value => {
    console.log(value);
    var kk = value;
    var price = kk.substring(value.length - 4, value.length);
    console.log(price);
    this.setState({ price });
  };

  onChange = val => {
    // console.log(val);
    this.setState({ val });
  };
  close(class1, class2) {
    console.log(222);
    console.log(this.props);
    const { className1, className2, dispatch } = this.props;
    console.log(111, class1, class2);
    dispatch(changeClassName(class1, class2));
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div
        style={{
          display: this.props.ac == "ActivityHide" ? this.kk() : "block"
        }}
        className={this.props.ac}
      >
        <div
          onClick={() => {
            this.close("shadowHide", "ActivityHide");
          }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "10px 20px",
            fontSize: 20
          }}
        >
          x
        </div>
        <div style={{ padding: "20px" }}>
          <div style={{ overflow: "hidden" }}>
            <div style={{ float: "left" }}>
              <img src={require("@/assets/images/2999.png")} alt="" />
            </div>
            <div style={{ padding: "0 10px", float: "left", width: "50%" }}>
              <span
                style={{
                  paddingBottom: "30px",
                  display: "inline-block",
                  fontWeight: "bolder"
                }}
              >
                古琴免费认养正麟殿公益活动-0元租古琴
              </span>
              <span>
                保证金
                <span
                  style={{
                    color: "red",
                    display: "inline-block",
                    fontSize: "20px"
                  }}
                >
                  ￥{this.state.price}元
                </span>
              </span>
              <span
                style={{
                  fontSize: "12px",
                  display: "inline-block",
                  color: "#ccc"
                }}
              >
                剩余:990套
              </span>
            </div>
          </div>
          <div>
            <p style={{ padding: "20px 0", fontWeight: "bolder" }}>类型</p>
            <SegmentedControl
              values={["初学者-2999", "中级演奏-6666", "高档演奏-9999"]}
              onChange={this.onChanges}
              onValueChange={this.onValueChange}
              tintColor={"#ff0000"}
              selectedIndex={this.state.i}
            />
            <WhiteSpace />
            <hr />
            <p
              style={{
                padding: "15px 0",
                fontWeight: "bolder",
                position: "relative"
              }}
            >
              数量
              <span style={{ display: "inline-block" }}>
                <Stepper
                  style={{ minWidth: "100px" }}
                  showNumber={true}
                  max={990}
                  min={1}
                  value={this.state.val}
                  onChange={this.onChange}
                />
              </span>
              <span
                style={{
                  display: "inline-block",
                  position: "absolute",
                  right: "15%",
                  top: "25%"
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FFD500",
                    borderRadius: "20px",
                    color: "#fff"
                  }}
                  onClick={this.showModal('modal1')}
                  size="small"
                  inline
                >
                  立即预定
                </Button>
                <Modal
                  visible={this.state.modal1}
                  transparent
                  maskClosable={false}
                  onClose={this.onClose("modal1")}
                  title="此路不通"
                  footer={[
                    {
                      text: "Ok",
                      onPress: () => {
                        console.log("ok");
                        this.onClose("modal1")();
                      }
                    }
                  ]}
                  wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                  afterClose={() => {
                    // alert("afterClose");
                  }}
                >
                  此功能还在开发中哟，敬请期待！(^w^)
                </Modal>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default ActivitySheet;
