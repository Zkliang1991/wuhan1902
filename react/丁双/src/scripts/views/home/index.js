

import "./index.scss";
import { Head } from "../../components/head/head";
import {Link} from "react-router-dom";
import {connect} from "react-redux"; 
import {getAllGoods } from "../../actions";
import {NoticeBar} from "antd-mobile";
import { WingBlank, WhiteSpace ,Carousel} from 'antd-mobile';

@connect(
    state=>{
        return {
            allGoods:state.data.allGoods  
        }
    }
)
export class Home extends Component{
    state = {
        images:[     
            "http://106.15.237.125/base/imgs/mv2.jpg",
            "http://106.15.237.125/base/imgs/mv3.jpg",
            "http://106.15.237.125/base/imgs/mv4.jpg",
            "http://106.15.237.125/base/imgs/mv5.jpg"
           
      ]
    }
    componentWillMount(){
        const {dispatch,allGoods} = this.props;
        if(allGoods.length<=0){
            dispatch(getAllGoods({
                url:'/react/getGoods'
            }))
        }
    }
    render(){
        const {allGoods} = this.props;
        // console.log(allGoods);
        return (
            <div>
                <Head title = "首页" show = {true}/>
                <WhiteSpace/>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    最新公告: 热烈庆祝618，欢迎大家前来订购，全场史无前例大促销，全场1折，全场1折，你没有听错，对，你没有听错，买到就是赚到，除了此外，买花还送宝马，对，就是宝马...
                </NoticeBar>
                <WhiteSpace/>
                <WingBlank>
                    <Carousel
                    autoplay={true}
                    infinite
                    >
                    {this.state.images.map(val => (
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                    </Carousel>
                </WingBlank>
                <WhiteSpace/>

                    <div className = "move-in">
                        {
                            allGoods.map((item,i)=>{
                                return (
                                    <Link to = {"/good/detail/"+item._id+"?title="+item.lable}>
                                    <div  
                                    key={i}
                                    style={{ display: 'inline-block', width: '45%',marginLeft:"3%",marginBottom:"10px"}}
                                    >
                                    <WhiteSpace/>
                                    <img
                                        src={item.img}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' ,height:130,borderRadius:"10px"}}
                                    />
                                    <p style = {{fontSize:"16px",color:"#666",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{item.title}</p>
                                    <p style = {{fontSize:"16px",color:"#666"}}>全场假一陪十</p>
                                    <span style = {{fontSize:"16px",color:"#f00",textAlign:"center"}}>价格:{item.price}</span>

                                    </div>
                                    </Link>
                                )  
                            })
                        }
                    </div>
            </div>
        )
    }
}