import React,{Component} from "react";
import { connect } from "react-redux";
import {getClassify} from "../../actions";
import "./index.scss"
@connect(
    state=>{
        return{
            num:state.data.num,
            classify:state.data.classify,
            addSubject:state.data.addSubject,
        }
    }
    )
class Order extends Component{
    getValuePaixu(){
        const {
            index,
            pageContent,
            arrayProps
        }=this.props
        console.log("this.props.arrayProps",arrayProps)
        var selectElement=document.getElementsByClassName("addsubject-getValuePaixu2")[index];
        console.log(selectElement.value)
        if(selectElement.value==="升序排列"){
            var arr =pageContent[index];
            var compare = function(obj1,obj2){
                var val1 = obj1.result*1||0;
                var val2 = obj2.result*1||0;
                return val1-val2
            }
            var sortArr = arr.sort(compare);
            var newArray1=[...this.props.pageContent]
            newArray1.splice(index,1,sortArr)
            this.props.dispatch({type:"pageContent",pageContent:newArray1});
        }else if(selectElement.value==="降序排列"){
            var arr =pageContent[index];
            var compare = function(obj1,obj2){
                var val1 = obj1.result*1||0;
                var val2 = obj2.result*1||0;
            return  val2-val1
            }
            var sortArr = arr.sort(compare);
            var newArray1=[...this.props.pageContent]
            newArray1.splice(index,1,sortArr)
            this.props.dispatch({type:"pageContent",pageContent:newArray1});///
        }else{
            
        }
    }
    render(){
        return(
            <div>
                <select onChange={()=>this.getValuePaixu()} className="addsubject-getValuePaixu2">
                    <option>(可选)按分数排序</option>
                    <option>升序排列</option>
                    <option>降序排列</option>
                </select>
            </div>
        )
    }
}
export {Order}