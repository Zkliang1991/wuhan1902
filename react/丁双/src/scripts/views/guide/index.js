


import "./index.scss";
import { Demo } from "../../components/demo";
import {Swipe} from "~/components/swipe";
const SwipeItem = Swipe.Item;
export class Guide extends Component{
    state = {
        banner:[
            "http://106.15.237.125/base/imgs/g1.png",
            "http://106.15.237.125/base/imgs/g2.png",
            "http://106.15.237.125/base/imgs/g3.png",
            "http://106.15.237.125/base/imgs/g4.png"
        ]
    }
    // 跳转首页
    gotoApp = (index)=>{
        const {history} = this.props;
        if(index == this.state.banner.length-1){
            history.push("/app/home"); 
        }
    }
    // 保存记录到本地，超过三次 直接进入首页
    componentWillMount(){
        const {history} = this.props;
        if(localStorage.visitedCount){
            localStorage.visitedCount++;
            if(localStorage.visitedCount>3){
                history.push("/app/home");
            }
        }else{
            localStorage.visitedCount = 1;
        }
    }
    render(){
        const {banner} = this.state;
        return (
            <div className = "box">
                {/* <h2 className = "g-box">guide-guide-guide</h2>
                <Demo/> */}
                <Swipe id = "guide" options = {{speed:1500,loop:false}}>
                    {
                            banner.map((item,i)=>{
                                return (
                                    <SwipeItem key = {i}>
                                       <img onClick = {()=>this.gotoApp(i)} src={item} className = "g-img" alt=""/>
                                    </SwipeItem>
                                )
                            })
                    }
                </Swipe>
            </div>
        )
    }
}