



import "./index.scss";
import { Head } from "../../components/head/head";
import {connect} from "react-redux";
import { getDetailGood } from "../../actions";
import { Card, WingBlank, WhiteSpace, Button,Toast} from 'antd-mobile';
import {Link} from "react-router-dom";
import { List, TextareaItem } from 'antd-mobile';
import {axios} from "&";
@connect(
    state=>{
        return {
            ...state.data
        }
    }
)
export class Good extends Component{
    state = {
        count:1
    }
    
    componentWillMount(){
        const {dispatch,match} = this.props;
        dispatch(getDetailGood({
            url:"/react/getGoodOne",
            params:{
                goodId:match.params.goodId
            }
        }))
    }
    addComment = ()=>{
        var content = this.content.state.value;
        var username = sessionStorage.user?JSON.parse(sessionStorage.user).username:username;
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var time = `${year}-${month}-${day}`;
        // console.log("***************");
        // console.log(this.props.good);
        if(username&&content){
            // console.log(time);
            // console.log(content);
            // console.log(username);
            axios.post('/react/addComment',{
                    time,
                    username,
                    content,
                    good:this.props.good
            }).then(res=>{

            })

        }else{
            Toast.fail('未登录或未填写评论内容...', 1);
        }
    }
    addCart = ()=>{
        // console.log("添加购物车");
        // console.log("***************");
        // console.log(this.props.good);
        if(sessionStorage.user){

            var good = this.props.good[0]
            var goodId = good._id;
            var username = JSON.parse(sessionStorage.user).username;
            console.log(username);
            console.log(goodId,good);
            axios.post("/react/addToCar",{
                
                    good,
                    goodId,
                    username,
                    count:"1"
               
            }).then(res=>{
    
            })
        }else{
            Toast.fail('请先登录', 1);
        }
    }
    render(){
        const {
            good,
            location
        } = this.props;
        var goods = good[0];
        return (
            <div>
                <Head title = {new URLSearchParams(location.search).get("title")} show = {true} search = {true}/>
                <div className = "move-in">
                <WingBlank>
                    <WhiteSpace/>
                    <Card>
                        <Card.Header
                            title={goods&&goods.type.text}
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={goods&&goods.lable}
                        />
                        <Card.Body>
                            <div>
                                <img src={goods&&goods.img} alt="" width = "100%" height = "260"/>
                                <h2 style = {{fontSize:"20px",color:"#999"}}>
                                    {goods&&goods.title} -- 价格 {goods&&goods.price}
                                </h2>
                            </div>
                        </Card.Body>
                        <Card.Footer extra={<Button inline size="small" type="warning"><Link to = "/comment">查看评论</Link></Button>} />
                    </Card>
                </WingBlank>
              
                <div style = {{margin:"15px"}}>
                    <List>
                        <TextareaItem
                            title="评论内容"
                            placeholder="请输入你的评论内容(必填)"
                            data-seed="logId"
                            ref={el => this.content = el}
                            rows = {3}

                        />
                        <Button style = {{float:"right",marginTop:"15px",marginBottom:"15px"}} inline size="small" type="primary" onClick = {this.addComment}>添加评论</Button>
                    </List>
                    <Button style = {{marginTop:"15px",marginBottom:"15px"}} size="small" inline type="primary" onClick = {this.addCart} onClick = {this.addCart}>添加购物车</Button>
                    <Button style = {{marginTop:"15px",marginBottom:"15px",marginLeft:"15px"}} size="small" inline type="warning"><Link to = "/app/cart">进入购物车</Link></Button>
                </div>
                </div>
               
            </div>
        )
    }
}
