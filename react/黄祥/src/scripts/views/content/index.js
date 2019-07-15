import React from 'react';
import "./index.scss";
import axios from "axios"
import { Head } from "@/scripts/components/head/index.js"

export class Content extends React.Component{
    state={
        con:""
    }
    componentWillMount(){
        const link = this.props.match.params.link
        const translink = (link.replace(/\^/g,"/"))
        const translink2 = translink.replace(/\!/g,"?")
        console.log(translink2)
        axios.get('/chapter/'+translink2).then(res=>{
            this.setState({
                con:res.data.chapter.body
            })
            console.log(this.state.con)
        })
    }
    render(){
        return(
            <div className="content">
                <Head title=""></Head>
                {this.state.con}
            </div>

        )
    }
}