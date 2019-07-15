import React from 'react';
import "./index.scss";
import axios from "axios"
import { Head } from "@/scripts/components/head/index.js"
import { Modal, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
const alert = Modal.alert;
export class Detail extends React.Component {
    state = {
        book: "",
        bookscore: "",
        bookdata: "",
        ishave: false,
    }
    componentWillMount() {
        const bookid = this.props.match.params.bookid
        axios.get(`/book/${bookid}`).then(res => {
            this.setState({
                book: res.data,
                bookscore: res.data.rating.score,
                bookdata: res.data.updated.substr(0, 10)
            })
            console.log(this.state.book._id)

            if (sessionStorage.userId && sessionStorage.userInfo) {
                console.log(this.state.book._id)
                axios.get('/react/checkbook', {
                    params: {
                        bookmsg: this.state.book,
                        userid: sessionStorage.userId
                    }
                }).then(res => {
                    console.log(res)
                    this.setState({
                        ishave: res.data.type
                    })
                })
            }
        })
    }
    gotocata(id) {
        this.props.history.push(`/catalogue/${id}`)
    }
    collect(bookmsg) {
        if (sessionStorage.userInfo && sessionStorage.userId) {
            axios.get('/react/tocollect', {
                params: {
                    bookmsg: bookmsg,
                    userid: sessionStorage.userId
                }
            }).then(res => {
                Toast.success(res.data.msg, 1.5, null, true);
                this.setState({
                    ishave: true
                })
                console.log(res)
            })
        } else {
            alert('还未登录', '前往登录???', [
                { text: '取消', },
                { text: '登录', onPress: () => this.props.history.push('/main/my') },
            ])
        }
    }
    removecollect(bookmsg) {
        axios.get('/react/removecollect', {
            params: {
                bookmsg: bookmsg,
                userid: sessionStorage.userId
            }
        }).then(res => {
            Toast.success(res.data.msg, 1.5, null, true);
            this.setState({
                ishave: false
            })
        })
    }
    render() {
        const {
            book,
            bookscore,
            bookdata
        } = this.state
        console.log(book)
        return (
            <div className="detail">
                <Head title="书籍详情"></Head>
                <div className="head">
                    <div className="head_left">
                        <img src={decodeURIComponent(book.cover).slice(7)} />
                    </div>
                    <div className="head_right">
                        <p className="title">{book.title}<span>{bookscore}分</span></p>
                        <p className="author">作者：{book.author}</p>
                        <p className="minorCate">类型：{book.minorCate}</p>
                        <p className="sta">状态：连载</p>
                    </div>
                </div>
                <div className="catalogue" onClick={() => this.gotocata(book._id)}>
                    <h2>目录</h2>
                    <i className="iconfont icon-youjiantou"></i>
                    <p>最近更新：{bookdata}</p>
                    <p>{book.lastChapter}</p>
                </div>
                <div className="intro">
                    <h2>目录</h2>
                    <p>{book.longIntro}</p>
                </div>
                <footer>
                    <ul>
                        {
                            this.state.ishave ? <li onClick={() => this.removecollect(book)}><u>移除书架</u></li> : <li onClick={() => this.collect(book)}><u>加入书架</u></li>
                        }
                        <li><u>全本缓存</u></li>
                        <li onClick={() => this.gotocata(book._id)}><u>立即阅读</u></li>
                    </ul>
                </footer>
            </div>
        )
    }
}
