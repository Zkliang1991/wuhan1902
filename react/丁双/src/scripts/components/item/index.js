
import {WhiteSpace,WingBlank} from "antd-mobile";
import {Link} from "react-router-dom";
export class Item extends Component{
    render(){
        const {good} = this.props;
        return (
            <div className = "move-in">
                <Link to = {"/good/detail/"+good._id+"?title="+good.type.text}>
                    <WingBlank>
                    <WhiteSpace/>
                    <img src={good.img} alt="" width = "100%" height = "280" style = {{borderRadius:"5px"}}/>
                    <h2 style = {{fontSize :"20px"}}>{good.title} -- {good.type.text}</h2>
                    <p style = {{fontSize:"22px",color:"red"}}>RMB:{good.price}元</p>
                    </WingBlank>
                </Link>
            </div>
        )
    }
}