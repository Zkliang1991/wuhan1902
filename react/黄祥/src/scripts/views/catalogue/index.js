import React from 'react';
import "./index.scss";
import axios from "axios"
import { Head } from "@/scripts/components/head/index.js"

export class Catalogue extends React.Component {
    componentWillMount() {
        const bookid = this.props.match.params.bookid
        axios.get(`/mix-atoc/${bookid}?view=chapters`).then(res => {
            this.setState({
                bookchap: res.data.mixToc.chapters,
            })
            console.log(res)
        })
    }
    gotocontent(link) {
        const translink = (link.replace(/\//g, "^"))
        const translink2 = translink.replace(/\?/g, "!")
        this.props.history.push(`/content/${translink2}`)
    }
    state = {
        bookchap: [],

    }
    render() {
        return (
            <div>
                <Head title="章节"></Head>
                <div className="catalist">
                    {
                        this.state.bookchap.map((item, i) => {
                            return (<p key={i} onClick={() => this.gotocontent(item.link)}>{item.title}</p>)
                        })
                    }
                </div>
            </div>
        )
    }
}