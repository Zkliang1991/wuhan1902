import React ,{Component} from "react"
import {history} from "../../../utils"
import { NavBar, Icon,InputItem,Button,List} from 'antd-mobile';

export class SetCode extends Component{
    go(){
        history.go(-1)
    }
    render(){
        return(
            <div>
                <NavBar
                mode="dark"
                style={{background:"#FB7299"}}
                icon={<Icon type="cross-circle" />}
                onLeftClick={this.go}
            >验证手机号</NavBar>
                <p style={{display:"block",fontSzie:"14px",margin:"10px 10px"}}>重置密码后,你就可以使用新密码登录了</p>
                <List>
                        <InputItem
                            clear
                            placeholder="6-16个字符以内,区分大小写"
                            ref={el => this.autoFocusInst = el}
                        >密码</InputItem>
                        <InputItem
                            clear
                            placeholder="请再次输入"
                            ref={el => this.inputRef = el}
                        >确认密码</InputItem>
                </List>
                <Button onClick={this.finish} style={{marginTop:"10px",width:"80%",marginLeft:"10%",backgroundColor:"#FB7299",color:"white"}}>完成</Button>
            </div>
        )
    }
}