
import "./index.scss";
import { Head } from "../../components/head/head";
import { Card, WhiteSpace } from 'antd-mobile';
import {connect} from "react-redux";
import { Icon, Grid } from 'antd-mobile';
import {axios} from "&";

@connect(
    state=>{
        return {
            ...state.data
        }
    }
)
export class Comment extends Component{
    state = {
        comments:[]
    }
    componentWillMount() {
        axios.get("/react/allComments")
        .then(res=>{
            this.setState({
                comments:res.data.result
            })
        })
      }
    render(){
        // const {
        //     good,
        // } = this.props;
        // var goods = good[0];
        const {
            comments
        } = this.state;
        // console.log("**********");
        // console.log(comments);
        return (
            <div>
                 <Head title = "评论" show = {true} search = {true}/>
                 {
                    comments.map((item,i)=>{
                        return (
                            <div className = "move-in">
                                <WhiteSpace size="lg" />
                                <Card full>
                                <Card.Header
                                    title={
                                        item.good[0].type.text
                                    }
                                    thumb={item.good[0].img}
                                    thumbStyle = {{width:50,height:50}}
                                    extra={
                                    <div>
                                        <div style = {{color:"#999"}}>{item.username}</div>
                                    </div>
                                    }
                                />
                                <Card.Body>
                                    <div>
                                        {item.content}
                                    </div>
                                </Card.Body>
                                <Card.Footer content="💎💎💎💎" extra={ <div style = {{color:"#999",marginTop:"10px"}}>{item.time}</div>} />
                                </Card>
                            </div>
                        )
                    })
                 }

                 
            </div>
        )
    }
}