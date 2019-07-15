import React ,{Component} from "react"
import {history} from "../../../utils"
import { NavBar, Icon,InputItem,Button} from 'antd-mobile';
let timer = null
export class GetCode extends Component{
    state = {
        time:5,
        txt:"后可重发验证码",
        tof:true
    }
    go(){
        history.go(-1)
    }
    getCode(){
        history.push("/getCode")
    }
    resend(){
        console.log("重新发送验证码")
    }
    next(){
        console.log("下一步")
        history.push("/setCode")
    }

    componentDidMount(){
        timer = setInterval(()=>{
            if(this.state.time>0){
              this.setState({
                time:--this.state.time
              })
            }else{
              clearInterval(timer);
              this.setState({
                tof:false,
                txt:"重发验证码",
                time:""
              })
            }
        },1000)
      }

    render(){
        const{
            time,
            txt,
            tof
        } = this.state
        return(
            <div>
                <NavBar
                    mode="dark"
                    style={{background:"#FB7299"}}
                    icon={<Icon type="cross-circle" />}
                    onLeftClick={this.go}
                >验证手机号</NavBar>
                <p style={{display:"block",fontSzie:"14px",margin:"10px 10px"}}>您可以通过绑定的手机重置密码</p>
                <p style={{display:"block",fontSzie:"14px",margin:"10px 10px"}}>17671742538要改的</p>
                <InputItem
                    placeholder="请输入验证码"
                    maxLength="6"
                    style={{width:"40%"}}
                />
                <Button type="primary" disabled={tof} onClick={this.resend} style={{marginTop:"10px",width:"40%",marginLeft:"30%",color:"white"}}>{time+txt}</Button>
                <Button disabled={tof} onClick={this.next} style={{marginTop:"10px",width:"80%",marginLeft:"10%",backgroundColor:"#FB7299",color:"white"}}>下一步</Button>
            </div>
        )
    }
}