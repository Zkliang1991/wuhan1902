import React from 'react';
import "./index.scss";
import axios from "axios"
import { Head } from "@/scripts/components/head/index.js"

export class Majortype extends React.Component {
    state = {
        bookarr: [],
        showorhide: true
    }
    componentDidMount() {
        const major = this.props.match.params.major
        const sex = this.props.location.search.replace("?", "")
        axios.get('/book/by-categories?gender=' + sex + '&type=hot&major=' + major + '&minor=&start=0&limit=50').then(res => {
            this.setState({
                bookarr: res.data.books
            })
            console.log(this.state.bookarr)
            if (this.state.bookarr.length == 0) {
                this.setState({
                    showorhide: false
                })
            }
        })
    }
    gotodetail(bookid) {
        this.props.history.push(`/detail/${bookid}`)
    }
    render() {
        const {
            showorhide
        } = this.state
        console.log(typeof showorhide)
        return (
            <div>

                <Head title="分类列表"></Head>
                <div className="typelist">
                    {
                        this.state.bookarr.map((item, i) => {
                            return (
                                <div style={{ display: (showorhide ? "block" : "none") }} key={item._id} className="list comein" onClick={() => this.gotodetail(item._id)}>
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
                    <div style={{ display: (showorhide ? "none" : "block") }}>
                        该类书籍还未上架，敬请期待
                </div>
                </div>
            </div>
        )
    }
}
