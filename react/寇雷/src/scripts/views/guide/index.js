import React , {Component} from "react"
import {history} from "../../../utils"
import {Button} from "antd-mobile"

let timer=null
export class Guide extends Component{
    state = {
        data: require("../../../assets/images/logo.png"),
        count:5,
        title:"倒计时"
      }
    gohome=(i)=>{
        history.push("/app/home")
    }
    componentDidMount(){
      timer = setInterval(()=>{
          if(this.state.count>0){
            this.setState({
              count:--this.state.count
            })
          }else{
            clearInterval(timer);
            this.setState({
              count:""
            });
            history.push("/app/home")
          }
      },1000)
    }
    render() {
      const {
        count,
        title
      } = this.state
      return (
        <div>
          <img 
              src={this.state.data}
              alt=""
              style={{ width: '100%',height:'100%'}}
            />
            <Button onClick={()=>this.gohome()} style={{display:"block",position:"absolute",top:"5%",right:"5%",width:"70px",height:"30px",lineHeight:"30px",textAlign:"center",borderRadius:"15px",fontSize:"14px",backgroundColor:"rgba(153,153,153,0.4)",color:"white"}}>{title} {count}</Button>
        </div>
        )}
}