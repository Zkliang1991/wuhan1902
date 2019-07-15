import React from 'react';
import "./index.scss";
import { Head } from "@/scripts/components/head/index.js"

export class Guide extends React.Component{
    state={
        guideimg:require("@/assets/1.jpg"),
        time:3
    }
    componentDidMount(){
        var timer = setInterval(() => {
            this.state.time--
            this.setState({
                time:this.state.time
            })
            if(this.state.time == 0){
                clearInterval(timer);
                this.props.history.push("/main")
            }
        }, 1000);
    }
    render(){
        return(
            <div className="guidepage">
                <img src={this.state.guideimg}/>
                <p>{this.state.time}</p>
            </div>
        )
    }
}