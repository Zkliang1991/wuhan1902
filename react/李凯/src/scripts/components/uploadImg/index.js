import "./index.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import {upLoadImg1} from "../../react-redux/actions";

@connect(state => {
  return {
      userPic:state.data.userPic
  };
})
class UpLoadImg extends Component {
  kk() {
    console.log(this, this.refs.one);
    this.refs.one.click();
  }
  upload() {
    console.log("准备上传 ");
    console.log(this.props);
    let file = this.refs.one.files[0];
    let data = new FormData();
    data.append("avatar", file);
    var parent = {
      url: "/react-lyra/uploadAvatar",
      method: "POST",
      contentType: false,
      processData: false,
      data: data
    };
    this.props.dispatch(upLoadImg1(parent));
    // this.$store.dispatch("upload",parent);
    
  }

  componentWillMount() {}

  render() {
    console.log(typeof this);
    console.log(this.props)
    return (
      <div>
        <img
            width="80"
            height="80"
          onClick={() => {
            this.kk();
          }}
          src={localStorage.userPic?localStorage.userPic:require("@/assets/images/ajax-loader.gif")}
          alt=""
        />
        <input
          type="file"
          ref="one"
          accept="image/*"
          onChange={() => {
            this.upload();
          }}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}

export default UpLoadImg;
