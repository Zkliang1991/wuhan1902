
import { PullToRefresh } from 'antd-mobile';
import {connect} from "react-redux";
import { reverseGoods,reverseSearchGoods} from '../../actions';
import {Item} from "../item";
@connect(
    state=>{
        return {
            ...state.data
        }
    }
)
export class GoodList extends Component{
    state = {
        refreshing:false,
        height:"100%"
    }
    render(){
        const {goods} = this.props;
        // console.log("*******************");
        // console.log(goods);
        return (
            <div>
                     {
                        goods.map((item,i)=>{
                            return (
                                <Item key = {i} good = {item}>
                                    
                                </Item>
                            )
                        })
                    }
            </div>
        )
    }
}