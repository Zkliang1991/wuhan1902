import React from 'react';
import "./index.scss";
import { Head } from "@/scripts/components/head/index.js";
import axios from "axios"

export class Search extends React.Component {
  state = {
    result: []
  }
  search() {
    console.log(this.inp.value)
    const val = this.inp.value;
    axios.get('/book/fuzzy-search?limit=20&query=' + val).then(res => {
      this.setState({
        result: res.data.books
      })
      console.log(this.state.result)
    })
  }
  gotodetail(bookid) {
    this.props.history.push(`/detail/${bookid}`)
  }
  render() {
    return (
      <div>
        <Head title="搜索"></Head>
        <div className="inpbar">
          <input ref={el => this.inp = el} type="text" />
          <p onClick={() => this.search()}>搜索</p>
        </div>
        <div className="typelist">
          {
            this.state.result.map((item, i) => {
              return (
                <div key={item._id} className="list comein" onClick={() => this.gotodetail(item._id)}>
                  <div className="img">
                    <img src={decodeURIComponent(item.cover.replace("/agent/", ""))} />
                  </div>
                  <div className="intro">
                    <p className="title">{item.title}</p>
                    <p className="author">作者：{item.author}</p>
                    <p className="shortIntro">{item.shortIntro}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}