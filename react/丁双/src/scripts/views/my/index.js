

import "./index.scss";
import { Head } from "../../components/head/head";
import {connect} from "react-redux";
import {observer} from "mobx-react";
import { Avatar, MyList,Video } from "../../components";
// observer 就是一个观察者 当可被观察数据 通过action修改 启动观察函数

@connect(
    state=>{ 
        return {
            count:state.data.count
        }
    },

)
@observer
export class My extends Component{
    goLogin=()=>{
        this.props.history.push("/login");
    }
    render(){
        return (
            <div>
                <Head search = {true}/>
                <Avatar/>
                <MyList/>
                <Video/>
            </div>
        )
    }
}