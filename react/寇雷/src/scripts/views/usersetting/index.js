import React,{Component} from "react"
import { Head } from "../../components/head";
import{InputItem,Button,Modal} from "antd-mobile"
import { history } from "../../../utils";


const alert = Modal.alert;
export class Usersetting extends Component{
    clean(){
        sessionStorage.removeItem("regtime");
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem("uid");
        history.push("/app/home")
    }
    render(){
        const id = sessionStorage.username
        const uid = sessionStorage.uid
        const phone = sessionStorage.phone
        const time = sessionStorage.regtime
        return(
            <div>
                <Head title="账户资料"/>
                <div style={{marginTop:"45px"}}>
                    <InputItem
                        type="money"
                        placeholder={id}
                        editable={false}
                    >昵称</InputItem>
                    <InputItem
                        type="money"
                        placeholder={uid}
                        editable={false}
                    >UID</InputItem>
                    <InputItem
                        type="money"
                        placeholder="暂未设置"
                        editable={false}
                    >性别</InputItem>
                    <InputItem
                        type="money"
                        placeholder="暂未设置"
                        editable={false}
                    >出生年月</InputItem>
                    <InputItem
                        type="money"
                        placeholder="暂未设置"
                        editable={false}
                    >个性签名</InputItem>
                    <InputItem
                        type="money"
                        placeholder={phone}
                        editable={false}
                    >手机号</InputItem>
                    <InputItem
                        type="money"
                        placeholder={time}
                        editable={false}
                    >注册时间</InputItem>
                    <Button onClick={()=>alert('退出账户', '确定要退出登录吗?', [
                        { text: '取消'},
                        { text: '注销', onPress:this.clean },
                    ])} type="warning" style={{width:"100%",backgroundColor:"white",color:"black",marginTop:"20px"}}>注销登录</Button>
                    <p style={{color:"#999999",fontSize:"12px",marginTop:"20px"}}>哔哩哔哩</p>
                </div>
            </div>
        )
    }
}