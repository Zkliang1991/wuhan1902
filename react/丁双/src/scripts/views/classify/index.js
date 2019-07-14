

import "./index.scss";
import { Head } from "../../components/head/head";
import {connect} from "react-redux";
import { getAllGoods, getGoodTypes } from "../../actions";
import { GoodList } from "../../components/list";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

@connect(
    state=>{
        return {
            types :state.data.types,
            allGoods :state.data.allGoods
        }
    }
)
export class Classify extends Component{

    componentWillMount(){
        const {types,dispatch,allGoods} = this.props;
        if(allGoods.length<=0){
            dispatch(getAllGoods({
                url:'/react/getGoods'
            }))
        }
     
        setTimeout(()=>{
            if(types&&types.length<=0){
                dispatch(getGoodTypes({
                    url:"/react/getGoodTypes"
                }))
            }
        },250)
        {
            types.map((item,i)=>{
                return (
                    item.title = item.text
                )
            })
        }
      
    }
    render(){
        // console.log("**")
        // console.log(this.props);
        const {types,allGoods} = this.props;
        
        // 筛选
        // const goods=allGoods.filter(item=>item.type.value == type.value);
        return (
            <div>
                <Head title = "分类"/>
                <Tabs tabs={types}
                    initialPage={0}
                    tabBarUnderlineStyle = {{border:"2px solid red"}}
                >
                    {
                        types&&types.map((type,i)=>{
                            return (
                                <GoodList key = {i} goods={allGoods.filter(item=>item.type.text == type.text  )}/>
                            )
                        })
                    }
                </Tabs>
            </div>
        )
    }
}