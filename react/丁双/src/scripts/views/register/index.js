

import {Head} from "../../components/head/head";
import "./index.scss";
import {Link} from "react-router-dom";
import {WingBlank,List,InputItem,WhiteSpace,Button,Toast } from "antd-mobile";
import {axios} from "&";

export const userReg = /^[\u4e00-\u9fa5]{2,4}$/;
export const  mobileReg = /^1(3|5|7|8|9)\d{9}$/
export class Register extends Component{
    state = {
        registerDisable:true,
        // 最强认证  以时间为准
    }
    
    // 错误验证
    // 手机号 与用户名共同验证
    getMobile = (val)=>{
            this.setState({
                registerDisable:!(userReg.test(this.user.state.value)&&mobileReg.test(val))
            })
    }
    registerAuth = ()=>{
        axios.post('/react/saveUser',{
            mobile:this.mobile.state.value,
            username:this.user.state.value,
        }).then(res=>{
            if(!!res.data.type){
                this.props.history.push('/login');
            }
        })
    }
    render(){
        const {
            registerDisable,
        } = this.state;
        return (
            <div>
                <Head title = "注册" show = {true} search = {true}/>
                <WhiteSpace/>
                <WingBlank>
                    <List>
                    <WhiteSpace/>
                    <InputItem
                        type="tel"                   
                        placeholder="请输入姓名（中文2-4位）"
                        clear
                        ref = {el=>this.user=el}
                        onChange = {this.getUser}
                    >姓名</InputItem>  
                    <WhiteSpace/>
                    <InputItem
                        type="tel"                   
                        placeholder="请输入手机号"
                        clear
                        ref = {el=>this.mobile=el}
                        onChange = {this.getMobile}
                    >手机号</InputItem>       
                    <WhiteSpace/>
                    <Button onClick = {this.registerAuth} type = "primary" disabled = {registerDisable}>注册</Button>
                    </List>
                </WingBlank>

                <div style = {{fontSize:"18px",color:"#999",textAlign:"center",marginTop:"20px"}}><Link to = "/login"> 已有账号 去登陆 </Link> </div>
            </div>
        )
    }
}