import React , {Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import {axios,history} from "../../../utils"
import { SearchBar,WhiteSpace,Toast} from 'antd-mobile';
import {Link} from "react-router-dom"


export class Search extends Component{
    state = {
        nomessage:require("../../../assets/images/no.png"),
        up:require("../../../assets/images/up.png"),
        hidden:{
            display:"none",
            margin:"0 auto"
        },
        searchmessage:[]
    }
    componentWillMount(){
        console.log(this.props.match.params.keyword)
        axios.get("/vue/messages",{
            params:{
                keyword:this.props.match.params.keyword
            }
        }).then((res)=>{
            if(res.data.result.length===0){
                this.setState({
                    hidden:{
                        display:"block",
                        margin:"0 auto"
                    }
                })
            }
        })
    }
    componentDidMount(){
        console.log(this.refs.search)
    }
    search=(search)=>{
        console.log(this.refs.search.state.value);
        if(this.refs.search.state.value===""||this.refs.search.state.value===undefined){
            Toast.offline('您要搜索什么呢?', 1);
        }else{
            axios.get("/vue/messages",{
                params:{
                    keyword:this.refs.search.state.value
                }
            }).then((res)=>{
                console.log(res)
                if(res.data.result.length===0){
                    this.setState({
                        hidden:{
                            display:"block",
                            margin:"0 auto"
                        },
                        searchmessage:[]
                    })
                } else{
                    this.setState({
                        hidden:{
                            display:"none",
                            margin:"0 auto"
                        },
                        searchmessage:res.data.result
                    })
                }
            })
        }
    }

    render(){
        const {
            match
        } = this.props
        const {
            hidden,
            searchmessage,
        } = this.state
        console.log(searchmessage)
        return(
            <div>
                <NavBar
                mode="dark"
                style={{backgroundColor:"#FB7299",position:"fixed",top:0,width:"100%"}}
                icon={<Icon type="left"/>}  
                onLeftClick={()=>history.go(-1)}
                rightContent={<Icon key="0" type="ellipsis" />}
        >搜索</NavBar>
                <div style={{marginTop:"45px"}}>
                    <SearchBar placeholder="Search" defaultValue={match.params.keyword} ref="search" onBlur={this.search}/>
                    <WhiteSpace />
                    <img src={this.state.nomessage} alt="" style={hidden}/>
                    {searchmessage.map((lv, index) => {
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