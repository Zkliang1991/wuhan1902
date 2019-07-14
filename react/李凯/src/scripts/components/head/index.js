import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import "./index.scss";

class Head extends Component {
  render() {
      console.log(this.props);
      const {
          left,
          right,
          children
      } = this.props;
    return (
      <div className="head" >
        <NavBar
          mode="light"
          leftContent={left}
          // onLeftClick={(val) => console.log(val)}
          rightContent={right}
        >
          {children}
        </NavBar>
      </div>
    );
  }
}

export default Head;
