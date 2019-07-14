import { Head } from "../../components/head/head";

import {SearchBar} from "antd-mobile";
import {connect} from "react-redux";
import { getSearchGoods } from "../../actions";
import { GoodList } from "../../components/list";

@connect(
    state=>{
        return {
            searchGoods:state.data.searchGoods
        }
    }
)
export class Search extends Component{
    submit=(val)=>{
        console.log(val);
        const {dispatch} = this.props;
        dispatch(getSearchGoods({
            url:'/react/getGoods',
            params:{
                keyword:val
            }
        }))

    }
    change=(val)=>{
    }
    render(){
        // console.log("*********************");
       const {searchGoods} = this.props;
    //    console.log(searchGoods);
        return (
            <div>
                <Head title = "搜索" show = {true} search = {true}/>
                <SearchBar 
                placeholder="Search" 
                maxLength={8} 
                onSubmit = {this.submit}
                onChange = {this.change}
                />
                <GoodList
                goods = {this.props.searchGoods}
                />
            </div>
        )
    }
}