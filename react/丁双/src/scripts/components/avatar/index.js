







import "./index.scss";

import {axios} from "&";

import {Toast} from "antd-mobile";

import { observer } from "mobx-react";
import car from "~/mobx/car";

@observer
export class Avatar extends Component{
    state = {
        username:'',
        mobile:""
    }
    componentWillMount(){
        if(sessionStorage.userInfo){
            this.setState({
                username:JSON.parse(sessionStorage.user).username,
                mobile:JSON.parse(sessionStorage.mobile).mobile
            })
            if(!localStorage.touxiang){
                axios.post("/react/touxiang",{
                    params:{
                        username:this.username
                    }
                }).then(res=>{
                    console.log("888");
                    console.log(res.data.result);
                    this.setState({
                        // 上线 http://106.15.237.125:2019/ 改为空
                        touxiang:res.data.result.avatar.replace(/public/,'http://106.15.237.125:2019/')
                    })
                })
            }
        }
    }
   
    upLoadImg = ()=>{
        // console.log(this.one)
        this.one.click();
    }

    shangchuan = ()=>{
        let file = this.one.files[0];  
        let data = new FormData(); 
        data.append('avatar',file);
        // console.log(data,file);
        car.shangchuan(data);
    }

    message = ()=>{
        Toast.fail('请先登录...', 1);
    }
    render(){
        const {
            username,
            mobile
        } = this.state;
        const {touxiang} = car;
        return (
            <div>
                <div>
                    <div style = {{display:sessionStorage.userInfo?"block":"none",height:"100px",background:"#fff"}}>
                        <div style = {{float:"left"}}>
                            <img onClick = {this.upLoadImg} src={touxiang} alt="上传图片" title = "点击上传头像" width ="80" height = "80" style = {{margin:"10px",borderRadius:"6%"}} />
                        </div>
                        <div style = {{float:"left"}}>
                            <p style = {{fontSize:"22px",color:"#000",marginTop:"14px"}}>{username}</p>
                            <p style = {{fontSize:"18px",color:"#999",marginTop:"18px"}}>手机号:{mobile}</p>
                        </div>
                    </div>
                        <input type="file" ref = {el=>this.one=el} accept = 'image/*' onChange = {this.shangchuan} style = {{display:"none"}}/>

                    <div style = {{display:!sessionStorage.userInfo?"block":"none",height:"100px",background:"#fff"}}>
                        <div style = {{float:"left"}}>
                            <img src="http://106.15.237.125/base/imgs/mv2.jpg" onClick = {this.message} alt="上传图片" width ="80" height = "80" style = {{margin:"10px",borderRadius:"6%"}} />
                        </div>
                        <div style = {{float:"left"}}>
                            <p style = {{fontSize:"22px",color:"#000",marginTop:"14px"}}>倚天屠龙</p>
                            <p style = {{fontSize:"18px",color:"#999",marginTop:"18px"}}>你还未登录哦...</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
