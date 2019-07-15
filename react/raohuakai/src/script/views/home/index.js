import React,{Component}from "react"
// import {Route,Switch,Redirect}from "react-router-dom"
import {Head}from "@/script/components/head"
import {Button, NoticeBar, WhiteSpace, Icon} from "antd-mobile"
import {axios} from "&"
import {Banner} from "@/script/components/banner"
import demo from "@/script/mobx/demo";
import {observer} from "mobx-react"
// import {axios} from "@/utils"
@observer
 class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            banner:[],
            text:""
        }
    }
    //获取用户信息

    componentWillMount(){
        demo.setStorage(sessionStorage.userInfo);
        // demo.usertInfo|| 
        axios.get("/react/getUserInfo",{
            params:{
                userInfo:sessionStorage.userInfo
            }
        }).then(res=>{
            if(res.data.type){
                demo.getUsetname(res.data.result.mobile)
            }

        })  
        if(demo.usertInfo){
            this.setState({
                text:"项目打分(管理员)"
            })
        }
        // demo.usertInfo?"项目打分(管理员)":"项目打分(非管理管,不可点击)"
    }

    //向后台提交成绩数据
    submitTo=()=>{
        this.props.history.push("/submit");
    };
    //前往查看全部科目成绩
    addsubject=()=>{
        this.props.history.push("/addsubject");
    }
    //前往打分
    gotoGrade=()=>{
        this.props.history.push("/grade");
    }
    //成绩分析
    analyseChengji=()=>{
        console.log(2222);
        this.props.history.push("/analyse");

    }
    render(){
        const {
            count,
            usertInfo,
            setCount,
            storage
        }=demo;
        const {
            text
        }=this.state;
        return (
            <div>
                <div className="head-position">
                    <Head title="首页"></Head>
                </div>
                    <div className="head-cen"></div>
                
                <Banner></Banner>
                <div>
                <WhiteSpace size="lg" />
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                喜讯:恭喜武汉千峰HTML5-1902饶先生一周喜提俩offer，月薪6500与7500，即刻出发，上岗工作
                </NoticeBar>
                </div>
                <Button
                type="primary"
                onClick={this.submitTo}
                >提交项目</Button>
                <Button
                disabled={demo.usertInfo==13125162637||demo.usertInfo==18086417861?false:true}
                onClick={this.gotoGrade}
                >{demo.usertInfo==13125162637||demo.usertInfo==18086417861
                    ?"项目打分(管理员)":"项目打分(非管理管,不可点击)"}</Button>
                 <Button
               onClick={this.addsubject}
                >查看成绩</Button>
                 <Button
                 onClick={this.analyseChengji}
                  type="warning"
                >成绩分析</Button>
            </div>
        )
    }
}

export{Home}