import React,{Component}from "react"
import {Head}from "@/script/components/head"
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {axios} from "&";
import {connect} from "react-redux";
// import {Route,Switch,Redirect}from "react-router-dom"
import { getAddSubject ,getClassify} from "../../actions";
import {List} from "../../components/list";
import store from "../../store"
import { Order } from "../../components/order";
//输入props到view
const mapStateToProps=(state)=>{
    return{
        classify:state.data.classify,
        addSubject:state.data.addSubject,
        pageContent:state.data.pageContent
    }
}
class Classify1 extends Component{
    constructor(props){
        super(props)
        // this.state={
        //     arrpage:[]
        // };
       
    }
    //请求分类数据
    initGetClass=()=>{
        this.props.dispatch(getClassify("/react/getClassify",()=>{
            
        }));
        axios.get("/react/getClassify").then(res=>{
            this.Rendering()
        })
    }
    //过滤分类科目
    Rendering(tab,index){
        var pageContent=this.props.classify.map((item,i)=>this.props.addSubject.filter((item2,j)=>item2.subject==item));
        //分类成功后发送dispatch
        this.props.dispatch({type:"pageContent",pageContent})

    }
    //初始化钩子函数
    componentDidMount(){
        this.initGetClass();
        this.Rendering();
        this.props.dispatch({type:"PINGLUNSHUJU",getAddcomment:[]})
    }
    render(){
        //props取值
        const {
            classify,
            addSubject,
            pageContent
        }=this.props;
        const tabs=classify.map((item,i)=>{
           return { title: <Badge>{item}</Badge> }
        });
        return (
            <div>
                <div className="head-position">
                    <Head title="科目分类"></Head>
                </div>
                <div className="head-cen"></div>
                <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) =>this.Rendering(tab,index)}
                        >
                        
                            {pageContent.map((item,i)=>{
                            return (
                                <div 
                                key={i}
                                >   
                                    <Order arrayProps={item} index={i} pageContent={pageContent}></Order>
                                    <List item={item} index={i}></List>
                                </div>
                            )
                            
                            })}
                        
                        
                    </Tabs>
                    <WhiteSpace />
                
            </div>
        )
    }
}
var Classify=connect(mapStateToProps)(Classify1)
export {Classify}