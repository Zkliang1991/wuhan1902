import React ,{Component} from "react";
import {withRouter} from "react-router-dom";
import {ComDetailed} from "../../components/comDetailed";
import {Comments} from "../../components/comment";
import {Head} from "../../components/head";
import {connect} from "react-redux";

var mapStateToprops=(state)=>{
    return{
        xiangqing:state.data.xiangqing,
    }
 }
class Detailed1 extends Component {
    componentWillMount(){
        // console.log(this.props);
        // console.log(this.props.match.params._id)
    }
    render(){
        const {
            xiangqing
        }=this.props
        return(
            <div>
               
                <div className="head-position">
                    <Head title="项目详情"></Head>
                </div>
                <div className="head-cen"></div>
                <ComDetailed addPro={this.props} item={xiangqing}></ComDetailed>
                <Comments goodId={this.props.match.params._id}></Comments>

            </div>

        )
    }
        
    
}

const Detailed2 = connect(mapStateToprops)(Detailed1)

var Detailed=withRouter(Detailed2)
export {Detailed}