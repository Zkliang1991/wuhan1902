

import "./index.scss";
import { Head } from "../../components/head/head";
import {axios} from "&";
import { WingBlank, WhiteSpace,Button, NoticeBar} from 'antd-mobile';
import { observer } from "mobx-react";
import car from "~/mobx/car";

@observer
export class Cart extends Component{
    componentWillMount(){
        if(sessionStorage.userInfo){
            car.getAllGoods();
        }else{
            this.props.history.push("/login")
        }
    }

    checkOne=(checked,goodId)=>{
        // console.log(!checked,goodId);
        car.checkOne(checked,goodId);
    }

    checkAll=(e)=>{
        // console.log(e.target.checked);
        car.changeQuna(e.target.checked)
    }
    // 删除选中
    delSelect = ()=>{
        console.log("del")
        car.delSelect()
    }

    reduce=(goodId,count)=>{
        if(count>1){
            car.changeOneCount(goodId,false);
        }
    }
    add=(goodId,count)=>{
        car.changeOneCount(goodId,true);
    }

    render(){
        const {
            allCartGoods,
            total,
            quan
        } = car;
        // console.log("*****");
        // console.log(quan);
        return (
            <div>
                <Head title = "购物车" show = {true} search = {true}/>
                <div style = {{display:allCartGoods.length>0?"block":"none"}}>
                    {
                        allCartGoods&&allCartGoods.map((item,i)=>{
                            return (
                                <div>
                                    <WingBlank/>
                                    <WhiteSpace/>
                                    <div className = "move-in" style={{ display: '-webkit-box', display: 'flex', margin: '15px 5px' }}>
                                        <input 
                                        type="checkbox"
                                        checked = {item.checked}
                                        dataId={item.goodId} 
                                        onChange={()=>this.checkOne(item.checked,item.goodId)}
                                        />
                                        <img style={{ height: '84px',width:"84px",borderRadius:"10%" ,margin: '0 15px' }} src={item.good.img} alt="" />
                                        <div style={{ lineHeight: 1 }}>
                                        <div style={{ marginBottom: '12px',marginTop:"5px", fontSize:"18px",width:"230px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{item.good.title}</div>
                                        <div style={{ fontSize: '24px', color: '#FF6E27' }}>
                                            <Button inline size="small" type="primary" onClick={() => this.reduce(item.goodId, item.count)} style = {{marginLeft:"90px"}}>-</Button>
                                            <Button activeStyle={false} inline size="small"  style = {{marginLeft:"10px"}}>{item.count}</Button>
                                            <Button inline size="small" type="warning" onClick={() => this.add(item.goodId, item.count)} style = {{marginLeft:"10px"}}>+</Button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <WhiteSpace/>
                <div style = {{display:!allCartGoods.length>0?"block":"none",fontSize:"20px",color:"#999",paddingLeft:"10px"}}>
                   亲，你还冒有添加商品...
                </div>
                <div style = {{width:"100%",height:"127px",position:"fixed",left:"0",bottom:"0",background:"#f5f5f5"}}>
                    <div>
                        <div style = {{display:allCartGoods.length>0?"block":"none",width:"100%",height:"76px",backgroundColor:"rgba(0,0,0,0.5)",color:"#fff",fontSize:"18px"}}>
                            <div>
                                <input 
                                type="checkbox" 
                                checked = {quan}
                                style = {{width:"15px",height:"15px" ,lineHeight:"76px",marginLeft:"10px",marginTop:"30px"}}
                                onClick={this.checkAll}
                                />全选
                                <span onClick={this.delSelect} style = {{marginLeft:"20px",border:"1px solid #999",borderRadius:"10%",color:"red"}}>删除选中</span>
                                <span style = {{marginLeft:"20px"}}>总价:￥</span><span>{total}</span>
                                <span style = {{marginLeft:"30px"}}>提交</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}