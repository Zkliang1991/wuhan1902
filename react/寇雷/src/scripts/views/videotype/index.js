import React ,{Component} from "react"
import {Head} from "../../components/head"
import { axios } from "../../../utils";
import {Link} from "react-router-dom"


class VideoType extends Component{
    state={
        qs:[],
        up:require("../../../assets/images/up.png"),
    }
    componentWillMount(){
        axios.get("/vue/videotype",{
            params:{
                tname:this.props.match.params.type
            }
        }).then((res)=>{
            this.setState({
                qs:res.data.result
            })
        })
    }

    render(){
        const {
            match
        } = this.props
        return(
            <div>
                <Head title={match.params.type}></Head>
                <div style={{marginTop:"45px"}}>
                            {this.state.qs.map((lv, index) => {
                                return (
                                    <Link key={index} to={`/video/${lv.aid}/${lv.title}`}>
                        <li  style={{
                            listStyle:"none",
                            float:"left",
                            width:"100%"
                        }}
                        >
                            <div style={{float:"left",width:"100%",border:"2px solid #FAFAFA"}}>
                                <img 
                                    src={lv.pic} 
                                    alt=""
                                    style={{
                                        width:"40%",
                                        padding:"10px 4%",
                                        height:"100px",
                                        float:"left",
                                        borderRadius:"30px"
                                    }}
                                />
                                <div style={{
                                    float:"left",
                                    textAlign:"left",
                                    width:"50%"
                                }}>
                                    <p className="p1" style={{
                                        overflow: "hidden",
                                        textOverflow:"ellipsis",
                                        whiteSpace: "nowrap",
                                        paddingTop:"15px",
                                        paddingRight:"5%",
                                        fontSize:"14px",
                                        lineHeight:"16px",
                                        color:"black"
                                    }}>{lv.title}</p>
                                    <p className="p2" style={{
                                        margin:"10px 0"
                                    }}>
                                        <img src={this.state.up} alt="" style={{
                                            width:"25%",
                                            height:"20px",
                                            display:"inline-block"
                                        }}/>
                                        <span style={{
                                            verticalAlign:"top",
                                            marginLeft:"20px",
                                            color:"#FB7299"
                                        }}>{lv.owner.name}</span>
                                    </p>
                                    <p className="p3" style={{
                                        overflow: "hidden",
                                        textOverflow:"ellipsis",
                                        whiteSpace: "nowrap",
                                        fontSize:"10px",
                                        paddingRight:"5%",
                                        color:"black"
                                    }}>简介:{lv.dynamic}</p>
                                </div>
                            </div>
                        </li> 
                    </Link> 
                                ) }
                            )}
                        </div>
            </div>
        )
    }
}


export default (props)=><VideoType {...props} key={props.location.pathname}/>