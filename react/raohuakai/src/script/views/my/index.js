

import React,{Component}from "react"
import {Head}from "@/script/components/head"
import {Toast,Accordion, List, Button} from "antd-mobile";
import {history} from "&";
import demo from "@/script/mobx/demo"
import {observer} from "mobx-react"
import {axios} from "&";
import "./index.scss";
import {Upimage} from "../../components/upimages";
import {connect} from "react-redux";
import { shangchuantouxiang } from "../../actions";

// import {Route,Switch,Redirect}from "react-router-dom"



const mapStateToProps=(state)=>{
    console.log(state)
    return{
        tiuxianglujin:state.data.tiuxianglujin
    }
}
@observer   //观察者模式，当action改变数据时，observer可以观察到数据变化，并且修改views
 class My1 extends Component{
    onChange = (key) => {
        console.log(key);
      }
     //轻提示
     showToast() {
        Toast.info('注销成功', 1);
        setTimeout(() => {
            delete sessionStorage.userInfo;
            delete sessionStorage.touxiang;
            demo.setStorage("")
        }, 1000);
      }
    //点击跳转登陆页
    toLogin=()=>{
        history.push("/login")
    };
    //注销按钮
    zhuxiao=()=>{
        
    };
    //初始化获取头像
    imitGetImage=()=>{
        axios.get("/react/getUserInfo",{
            params:{
                userInfo:sessionStorage.userInfo
            }
        }).then(res=>{
            if(res.data.code!==401){

                if(res.data.type){
                    demo.getUsetname(res.data.result.mobile)
                }
                if(res.data.result.avatar){
                   var touxiang = res.data.result.avatar.replace(/public/,'');
                    sessionStorage.touxiang = touxiang;
                this.props.dispatch(shangchuantouxiang(touxiang))
    
                }
                // console.log("初始化获取用户信息",res.data.result)
            }

        })  
    }
    componentDidMount(){
        // 发送请求获取客户信息
        demo.setStorage(sessionStorage.userInfo);
        this.imitGetImage()
    }
    render(){
        const {
            count,
            usertInfo,
            setCount,
            storage
        }=demo
        return (
            <div>
                <Head title="个人中心"></Head>
                
                <div  style={{display:storage?"block":"none"}}>
                    <Upimage></Upimage>
                </div>
                <h1 style={{display:storage?"block":"none"}}>欢迎您{usertInfo}</h1>
                <div style={{display:storage?"block":"none"}}>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Accordion  className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="个人信息">
                            <List className="my-list">
                            <List.Item>姓名</List.Item>
                            <List.Item>班级</List.Item>
                            <List.Item>手机号</List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="账户与安全" className="pad">爱护家人，贡献社会</Accordion.Panel>
                        <Accordion.Panel header="我的题库" className="pad">
                            水不流会臭,刀不磨会绣,人不学回落后!爱学习,爱生活,爱家人
                        </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
                <div  style={{display:!storage?"block":"none"}}>
                <Button 
                type="primary"
                onClick={this.toLogin}
                >
                    马上登陆
                </Button>
                </div>
                <div style={{display:storage?"block":"none"}}>
                <Button 
                type="warning"
                onClick={()=>this.showToast()}
                >
                    注销登陆
                </Button>
                </div>
                
            </div>
        )
    }
}
const My=connect(mapStateToProps)(My1)

export {My}