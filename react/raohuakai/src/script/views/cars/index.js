

import React,{Component}from "react"
import {Head}from "@/script/components/head";
import {connect} from "react-redux"
import { MySubmitProject } from "../../actions";
import {Item} from "../../components/item";
import {CarMould}from "../../components/buycar";
import {Accordion, Tag } from "antd-mobile";
import "./index.scss"
@connect(
    state=>{
        return{
            MySubmitProject:state.data.MySubmitProject,
            num:state.data.num,
            classify:state.data.classify
        }
    }
)
class Cars extends Component{
    componentDidMount(){
        this.props.dispatch(MySubmitProject("/react/MySubmitProject"))
    }
    onChange(selected) {
        console.log(`tag selected: ${selected}`);
      }

      AccordionOnChange = (key) => {
        // console.log(key);
        // console.log("Accordion",this.refs.Accordion)
      }
    render(){
        const {
            MySubmitProject
        }=this.props;
        const gaoshu=MySubmitProject.filter((item1,i1)=>item1.subject==="高数");  //高数
        const compute=MySubmitProject.filter((item1,i1)=>item1.subject==="计算机基础"); //计算机
        const zhuanyeke=MySubmitProject.filter((item1,i1)=>item1.subject==="专业课");//专业课
        const job=MySubmitProject.filter((item1,i1)=>item1.subject==="职业素养");  //职业素养
        return (
            <div>
                <div className="head-position">
                    <Head title="我的提交"></Head>
                    <h2 className="car-subClass">提交科目分类:
                    </h2>
                </div>
                <div className="head-cen"></div>
                <div className="head-cen"></div>
                
                <div style={{  marginBottom: 10 }}>
                <hr/>
                        <Accordion  className="my-accordion" onChange={this.AccordionOnChange} ref="Accordion">
                        <Accordion.Panel header="高数" >
                             {gaoshu.map((item,i)=>{
                                return(
                                    // <Item item={item} key={i}></Item>
                                    <CarMould item={item} key={i} ></CarMould>
                                )
                            })}
                        </Accordion.Panel>
                        <Accordion.Panel header="计算机基础" className="pad">
                            {compute.map((item,i)=>{
                                    return(
                                        // <Item item={item} key={i}></Item>
                                        <CarMould item={item} key={i}></CarMould>
                                    )
                                })}
                        </Accordion.Panel>
                        <Accordion.Panel header="专业课" className="pad">

                            {zhuanyeke.map((item,i)=>{
                                        return(
                                            // <Item item={item} key={i}></Item>
                                            <CarMould item={item} key={i}></CarMould>
                                        )
                                    })}

                        </Accordion.Panel>

                        <Accordion.Panel header="职业素养" className="pad">

                            {job.map((item,i)=>{
                                        return(
                                            <CarMould item={item} key={i}></CarMould>
                                        )
                                    })}

                            </Accordion.Panel>
                        </Accordion>
                    </div>
                {/* {MySubmitProject.map((item,i)=>{
                    return(
                        // <Item item={item} key={i}></Item>
                        <CarMould item={item} key={i}></CarMould>
                    )
                })} */}
                
            </div>
        )
    }
}

export {Cars}