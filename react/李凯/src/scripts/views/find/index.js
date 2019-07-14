import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import { Tabs, WhiteSpace, Flex, Accordion, List } from "antd-mobile";
import { LyraList, LyraList1 } from "../../components/list";

import { connect } from "react-redux";
import { getLyras, getSearchLyras } from "../../react-redux/actions";
const tabs = [{ title: "实体琴馆" }, { title: "教学课程" }];

@connect(state => {
  console.log(state);
  return {
    lyras: state.data.lyras
  };
})
class Find extends Component {

  state={
    open:""
  }

  componentWillMount() {
    console.log(this.props);
    const { dispatch, lyras } = this.props;
    console.log("4444", lyras.length);
    if (lyras.length <= 0) {
      dispatch(getLyras({ url: "/react-lyra/getLyras" }));
    }
  }

  paixuFind(star){
    if(star){
      this.props.dispatch(getLyras({
        url:"/react-lyra/getLyras",
        params:{
          keyword:star
        }
      }))
    }
    
  }

  render() {
    console.log(this.props,this.state);
    const { lyras } = this.props;
    const {open} = this.state;
    return (
      <div>
        <div>
          <Tabs
            tabs={tabs}
            initialPage={0}
            animated={false}
            useOnPan={false}
            tabBarBackgroundColor="#FFD500"
            tabBarActiveTextColor="#000"
            tabBarUnderlineStyle={{ borderColor: "#000" }}
            className="bb"
          >
            <div className="pt">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  // height: "250px",
                  backgroundColor: "#fff"
                }}
              >
                <div>
                  <Flex justify="between" align="start">
                    <Flex.Item>
                      <Accordion
                        defaultActiveKey=""
                        className="my-accordion"
                        onChange={this.onChange}
                        accordion
                      >
                        <Accordion.Panel header="附近">
                          <List className="my-list">
                            <List.Item>附近</List.Item>
                            <List.Item>东城区</List.Item>
                            <List.Item>西城区</List.Item>
                          </List>
                        </Accordion.Panel>
                      </Accordion>
                    </Flex.Item>
                    <Flex.Item>
                      <Accordion
                          // defaultActiveKey={open}
                          ActiveKey={open}
                        className="my-accordion"
                        onChange={this.onChange}
                      >
                        <Accordion.Panel header="星级">
                          <List className="my-list">
                            <List.Item onClick={()=>{this.paixuFind(3)}} >三星</List.Item>
                            <List.Item onClick={()=>{this.paixuFind(4)}} >四星</List.Item>
                            <List.Item onClick={()=>{this.paixuFind(5)}} >五星</List.Item>
                          </List>
                        </Accordion.Panel>
                      </Accordion>
                    </Flex.Item>
                    <Flex.Item>
                      <Accordion
                          defaultActiveKey=""
                        className="my-accordion"
                        onChange={this.onChange}
                      >
                        <Accordion.Panel header="人气">
                          <List className="my-list">
                            <List.Item>服务</List.Item>
                            <List.Item>环境</List.Item>
                            <List.Item>教育</List.Item>
                          </List>
                        </Accordion.Panel>
                      </Accordion>
                    </Flex.Item>
                  </Flex>
                </div>
              </div>
              {lyras.map((item, i) => {
                return <LyraList item={item} key={i} />;
              })}
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                //   height: "250px",
                  backgroundColor: "#fff"
                }}
              >
                <div>
                  <Flex justify="between" align="start">
                    <Flex.Item>
                      <Accordion
                        defaultActiveKey=""
                        className="my-accordion"
                        onChange={this.onChange}
                        accordion
                      >
                        <Accordion.Panel header="附近">
                          <List className="my-list">
                            <List.Item>附近</List.Item>
                            <List.Item>东城区</List.Item>
                            <List.Item>西城区</List.Item>
                          </List>
                        </Accordion.Panel>
                      </Accordion>
                    </Flex.Item>
                    <Flex.Item>
                      <Accordion
                          defaultActiveKey=""
                        className="my-accordion"
                        onChange={this.onChange}
                      >
                        <Accordion.Panel header="星级">
                          <List className="my-list">
                            <List.Item onClick={()=>{this.paixuFind(3)}} >三星</List.Item>
                            <List.Item onClick={()=>{this.paixuFind(4)}} >四星</List.Item>
                            <List.Item onClick={()=>{this.paixuFind(5)}} >五星</List.Item>
                          </List>
                        </Accordion.Panel>
                      </Accordion>
                    </Flex.Item>
                    <Flex.Item>
                      <Accordion
                          defaultActiveKey=""
                        className="my-accordion"
                        onChange={this.onChange}
                      >
                        <Accordion.Panel header="人气">
                          <List className="my-list">
                            <List.Item>服务</List.Item>
                            <List.Item>环境</List.Item>
                            <List.Item>教育</List.Item>
                          </List>
                        </Accordion.Panel>
                      </Accordion>
                    </Flex.Item>
                  </Flex>
                </div>
              </div>
              {lyras.map((item, i) => {
                return <LyraList1 item={item} key={i} />;
              })}
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}

export default Find;
