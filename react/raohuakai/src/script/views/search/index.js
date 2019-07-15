
import React,{Component} from "react";



import {Head} from "@/script/components/head";
import { SearchBar} from 'antd-mobile';
import "./index.scss"
import {connect} from "react-redux";
import { chengjiFind } from "../../actions";
import {List} from "../../components/list"


var mapsStateToProps=(state)=>{
    console.log("state",state)
    return{
        chengjiFind:state.data.chengjiFind
    }
}

class Search1 extends Component{
    // 输入时的change事件
    onChange(value){
    console.log(value)
    this.props.dispatch(chengjiFind("/react/chengjiFind",{
        params:{
            value
        }
    }))
    };
    // 点击回车时触发
    onSubmit(){
        this.getSearchValue()
    }
    //点击取消时触发
    onCancel(){

    }
    //失焦事件
    onBlur=()=>{
        this.getSearchValue()
    }
    //获取输入内容
    getSearchValue=()=>{
        console.log(this.autoFocusInst.state.value)
        if(this.autoFocusInst.state.value){
            this.props.dispatch(chengjiFind("/react/chengjiFind",{
                params:{
                    value:this.autoFocusInst.state.value
                }
            }))
        }
    }
    render(){
        return(
            <div>
                <div className="head-position">
                     <Head title="搜索"></Head>
                     <SearchBar 
                        placeholder="请输入搜索关键词" 
                        ref={el => this.autoFocusInst = el} 
                        // onInput={(value)=>this.onChange(value)}
                        // onSubmit={()=>this.onSubmit()}
                        // onCancel={()=>this.onCancel()}
                        onBlur={()=>this.onBlur()}
                        />
                </div>
                <div className="head-cen"></div>
                <div className="head-cen"></div>
               
                <div>
                    <List item={this.props.chengjiFind}></List>
                </div>
            </div>

        )
    }
}
var Search=connect(mapsStateToProps)(Search1);



export {Search}