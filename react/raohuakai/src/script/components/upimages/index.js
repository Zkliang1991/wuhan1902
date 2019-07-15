

import React,{Component} from "react";
import "./index.scss";
import {axios} from "&";
import {connect} from "react-redux";
import { shangchuantouxiang } from "../../actions";


const mapStateToProps=(state)=>{
    console.log(state)
    return{
        tiuxianglujin:state.data.tiuxianglujin,
        num:state.data.num
    }
}
class Upimage1 extends Component {
    //上传头像逻辑
    shangchuan=()=>{
        let file=this.refs.one.files[0];  //需要上传的图片
        let data=new FormData(); //新建表单对象  <form></form>
        data.append("avatar",file);
        console.log("data",data,file)
        axios({
            url:"/react/uploadAvatar",
            method:"POST",
            contentType:false,
            processData:false,
            data:data
        }).then(res=>{
            var touxiang = res.data.avatarurl.replace(/public/,'');
            sessionStorage.touxiang = touxiang;
            this.props.dispatch(shangchuantouxiang(touxiang))

        })
    };
    //调取文件上传的点击事件触发
    uploadimg=()=>{
        this.refs.one.click();
    };
    componentDidMount(){
    }
    
    render(){
        const {
            tiuxianglujin
        }=this.props
        return(
            <div>
                <div className="touxiang">
                     <img src={sessionStorage.touxiang?("http://47.93.221.40:8080"+sessionStorage.touxiang):require("@/assets/images/1.jpg")} alt="" width="100%" height="100%" onClick={this.uploadimg}/>
                     <input type="file" ref="one" accept="image/*" onChange={this.shangchuan} className="hiddenInput"/>
                </div>
                 
            </div>
        )
    }
}
const Upimage=connect(mapStateToProps)(Upimage1)
export {Upimage}