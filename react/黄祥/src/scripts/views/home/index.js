import React from 'react';
import "./index.scss";
import { Head } from "@/scripts/components/head/index.js";
import axios from "axios";
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';

export class Home extends React.Component {
    state = {
        collections: []
    }
    componentWillMount() {
        var that = this
        if (sessionStorage.userInfo && sessionStorage.userId) {
            axios.get('/react/mycollections', {
                params: {
                    userid: sessionStorage.userId
                }
            }).then(res => {
                this.setState({
                    collections: res.data.books
                })
            })
        }
    }
    gotodetail(bookid) {
        this.props.history.push(`/detail/${bookid}`)
    }
    render() {
        const {
            collections
        } = this.state
        console.log(collections)
        return (
            <div className="collectbox">
                <Head title="首页"></Head>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    手机号验证码登录未实名制，请使用账户密码登录
                </NoticeBar>
                {
                    collections.map((item, m) => {
                        return (
                            <div key={m} className="collectbook" onClick={() => this.gotodetail(JSON.parse(item)._id)}>
                                <img src={decodeURIComponent(JSON.parse(item).cover.replace("/agent/", ""))} />
                                <p>{JSON.parse(item).title}</p>
                                <p>{JSON.parse(item).author}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


