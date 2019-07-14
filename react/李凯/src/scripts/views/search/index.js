import "./index.scss";
import React, { Component } from "react";
import Head from "../../components/head";
import { Icon, SearchBar, Tabs,WhiteSpace } from "antd-mobile";
import { connect } from "react-redux";
import { getSearchLyras } from "../../react-redux/actions";
import { LyraList, LyraList1 } from "../../components/list";

const tabs = [{ title: "实体琴馆" }, { title: "教学课程" }];
@connect(state => {
  return {
    searchLyras: state.data.searchLyras
  };
})
class Search extends Component {
  change = val => {
    console.log(val);
    const { searchLyras, dispatch } = this.props;
    dispatch(
        getSearchLyras({
          url: "/react-lyra/getLyras",
          params: {
            keyword: val
          }
        }))
  };

  render() {
    console.log(this.props);
    const { history, searchLyras } = this.props;
    return (
      <div>
        <Head
          left={
            <Icon
              key="0"
              type="left"
              onClick={() => {
                history.goBack();
              }}
            />
          }
        >
          搜索
        </Head>
        <div style={{ paddingTop: "45px" }}>
          <SearchBar
            placeholder="搜索古琴馆/课程"
            maxLength={8}
            onChange={this.change}
          />
          <div>
            <Tabs
              tabs={tabs}
              initialPage={0}
              animated={false}
              useOnPan={false}
              tabBarBackgroundColor="#fff"
              tabBarActiveTextColor="#8B4513"
              tabBarUnderlineStyle={{ borderColor: "#8B4513" }}
            >
              
                <div
                  
                >
                  {searchLyras.map((item, i) => {
                    return <LyraList item={item} key={i} />;
                  })}
                </div>
                <div
                  
                >
                  {searchLyras.map((item, i) => {
                    return <LyraList1 item={item} key={i} />;
                  })}
                </div>
              
            </Tabs>
            <WhiteSpace />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
