import React, {Component} from "react";
import {connect} from "react-redux";
import {getAddSubject} from "../../actions";
import {List} from "../../components/list";
import{Head} from "../../components/head";
import "./index.scss"
var mapStateToProps=(state)=>{
    console.log("stateVVVVV",state)
    return{
        addSubject:state.data.addSubject,
        num:state.data.num
    }
}
class AddSubject1 extends Component{

    //初始化获取全部数据
    getAddSubject=()=>{
        this.props.dispatch(getAddSubject("/react/addSubject"))
    }
    componentWillMount(){
        this.getAddSubject()
    }
    getValuePaixu(){
        var selectElement=document.getElementById("addsubject-getValuePaixu")
        if(selectElement.value==="升序排列"){
            var arr =this.props.addSubject;
            var compare = function(obj1,obj2){
                var val1 = obj1.result*1||0;
                var val2 = obj2.result*1||0;
                return val1-val2
            }
            var sortArr = arr.sort(compare);
            this.props.dispatch({type:"ADDSUBJECT",addSubject:sortArr});
        }else if(selectElement.value==="降序排列"){
            var arr =this.props.addSubject;
            var compare = function(obj1,obj2){
                var val1 = obj1.result*1||0;
                var val2 = obj2.result*1||0;
            return  val2-val1
            }
            var sortArr = arr.sort(compare);
            this.props.dispatch({type:"ADDSUBJECT",addSubject:sortArr});
        }else{
            this.props.dispatch(getAddSubject("/react/addSubject"))
        }
    }
    render(){
        const {
            addSubject,
            num
        }=this.props
        console.log("addSubject",addSubject)
        return(
            <div>
                <div className="addSubject-head">
                    <Head title="全部科目成绩"></Head>
                </div>
                <div className="head-cen"></div>
                <select onChange={()=>this.getValuePaixu()} id="addsubject-getValuePaixu">
                    <option>按分数排序</option>
                    <option>升序排列</option>
                    <option>降序排列</option>
                </select>
                <List item={addSubject}></List>
            </div>
        )
    }
}
const AddSubject=connect(mapStateToProps)(AddSubject1)
export {AddSubject}