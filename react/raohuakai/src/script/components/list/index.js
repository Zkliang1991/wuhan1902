

import React,{Component} from "react";
import "./index.scss"
import {Item} from "../item";
import {connect} from "react-redux";
import {Link,withRouter} from "react-router-dom"


//输入props
var mapStateToProps=(state)=>{
    return{
        classify:state.data.classify,
        addSubject:state.data.addSubject,
        num:state.data.num,
    }
}

class List1 extends Component{
    constructor(props){
        super(props);
        
    }
    render(){

        const {
            item,
        }=this.props;
        return (<div>

            {item.map((item,i)=>{
               return (
                <Link to={"/detailed/"+item._id} onClick={this.goToDetailed} key={i} >
                    <p>序号:{i+1}</p>
               <Item  item={item}></Item>
               </Link>
               )
            })}
        </div>)
    }
}

var  List=connect(mapStateToProps)(List1)
List=withRouter(List)
export {List}