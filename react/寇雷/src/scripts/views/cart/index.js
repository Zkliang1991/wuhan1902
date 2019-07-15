import React , {Component} from "react"
import "./index.scss"
import {Head} from "../../components/head"
import { history,axios } from "../../../utils";
import { Button} from 'antd-mobile';
import {Link} from "react-router-dom"

export class Cart extends Component{
    state = {
        wel:require("../../../assets/images/clt.png"),
        com:require("../../../assets/images/c5r.png"),
        comic:[],
        up:require("../../../assets/images/up.png"),
    }
    componentWillMount(){
        axios.get("/vue/videotype",{
            params:{
                tname:"连载动画"
            }
        }).then(res=>{
            this.setState({
                comic:res.data.result
            })
        })
    }
    render(){
        return(
            <div>
                <Head title="动态"></Head>
                <div style={{marginTop:"45px",width:"100%"}}>
                    <img onClick={()=>history.push("/login")} src={this.state.wel} alt="" style={{width:"100%",display:sessionStorage.username?"none":"block"}}/>
                    <Button type="primary" style={{width:"34%",height:"40px",margin:"10px 8%",borderRadius:"20px",lineHeight:"40px"}}>番剧</Button>
                    <Button type="warning" style={{width:"34%",height:"40px",margin:"10px 8%",borderRadius:"20px",lineHeight:"40px"}}>国创</Button>
                    <p style={{color:"#FB7299",fontSize:"14px",margin:"10px 20px",textAlign:"left"}}>
                        <img src={this.state.com} alt="" style={{width:"41px",height:"12px",display:"inline-block"}}/>
                    当前热播</p>
                    {this.state.comic.map((lv, index) => {
                        return (
                            <Link key={index} to={`/video/${lv.aid}/${lv.title}`}>
                            <li  style={{
                                listStyle:"none",
                                float:"left",
                                width:"100%",
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
                <p style={{marginBottom:"50px",fontSize:"12px",color:"#FB7299"}}>已经没有更多了</p>
            </div>
        )
    }
}