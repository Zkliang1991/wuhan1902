import React ,{Component} from "react"
import {history} from "../../../utils"
import { NavBar, Icon,InputItem,Button} from 'antd-mobile';
export class Repassword extends Component{
    go(){
        history.go(-1)
    }
    getCode(){
        history.push("/getCode")
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    style={{background:"#FB7299"}}
                    icon={<Icon type="cross-circle" />}
                    onLeftClick={this.go}
                >重置密码</NavBar>
                <p style={{display:"block",textAlign:"left",fontSzie:"14px",margin:"10px 10px"}}>您可以通过绑定的手机重置密码</p>
                <InputItem
                    placeholder="请输入手机号"
                    maxLength="11"
                />
                <Button onClick={this.getCode} style={{marginTop:"10px",width:"80%",marginLeft:"10%",backgroundColor:"#FB7299",color:"white"}}>获取验证码</Button>
            </div>
        )
    }
}