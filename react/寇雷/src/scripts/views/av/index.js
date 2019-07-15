import React , {Component} from "react"
import { Head } from "../../components/head";
import "./index.scss"
import { axios, history } from "../../../utils";
import {Link} from "react-router-dom"
import {List,TextareaItem,Toast,ActionSheet,Modal} from "antd-mobile"

const Item = List.Item;
const Brief = Item.Brief;
const alert = Modal.alert;
class Video extends Component{
    state ={
        aid:0,
        avname:"",
        haveav:"",
        avimg:"",
        time:0,
        cid:0,
        style:{
            width:"100%",
        },
        img1:require("../../../assets/images/hot.png"),
        img2:require("../../../assets/images/up.png"),
        img3:require("../../../assets/images/error.png"),
        wsc:require("../../../assets/images/wsc.png"),
        xz:require("../../../assets/images/xz.png"),
        fx:require("../../../assets/images/fx.png"),
        pl:require("../../../assets/images/pl.png"),
        up:require("../../../assets/images/up.png"),
        img4:require("../../../assets/images/like.png"),
        no:require("../../../assets/images/no.png"),
        img5:require("../../../assets/images/cmw.png"),
        noliuyan:require("../../../assets/images/noliuyan.png"),
        view:0,
        danmuku:0,
        favorite:0,
        coin:0,
        share:0,
        like:0,
        desc:"",
        dynamic:"",
        likevideo:[],
        imgstyle:{
            width:"100%",
            height:"200px",
            display:"none"
        },
        discount:[],
        pinglunstyle:{
            width:"100%",
            height:"153px",
            display:"none"
        }
    }
    async componentWillMount(){
        this.setState({
            aid:this.props.match.params.av,
            avname:this.props.match.params.name
        })
        await axios.get("/vue/getAv",{
            params:{
                av: this.props.match.params.av
            }
        }).then(res=>{
            this.setState({
                haveav:res.data.result.owner.name,
                avimg:res.data.result.pic,
                time:res.data.result.duration,
                cid:res.data.result.cid,
                view:res.data.result.stat.view,
                danmuku:res.data.result.stat.danmaku,
                favorite:res.data.result.stat.favorite,
                coin:res.data.result.stat.coin,
                share:res.data.result.stat.share,
                like:res.data.result.stat.like,
                desc:res.data.result.desc,
                dynamic:res.data.result.dynamic,
            }) 
        })
        
        await axios.post("/vue/cainixihuan",{
            like:this.state.like
        }).then(res=>{
            if(res.data.result.length===1){
                this.setState({
                    imgstyle:{
                        width:"100%",
                        height:"200px",
                        display:"block"
                    }
                })
            } else{
                this.setState({
                    likevideo:res.data.result
                })
            }
        })

        await axios.get("/vue/getpinglun",{
            params:{
                av:this.props.match.params.av
            }
        }).then((res)=>{
            if(res.data.result.length===0){
                this.setState({
                    pinglunstyle:{
                        width:"100%",
                        height:"153px",
                        display:"block"
                    }
                })
            } else{
                this.setState({
                    discount:res.data.result,
                    pinglunstyle:{
                        width:"100%",
                        height:"153px",
                        display:"none"
                    }
                })
            }
        })
    }
    //监听页面滚动事件
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll=(event)=>{
        //滚动条高度
        let ctx=this;
        // let scrollTop  = document.documentElement.scrollTop;  //滚动条滚动高度
        // if(scrollTop>40){
        //     this.setState({ style: { position: "fixed",top:"0",left:"0",width:"100%",zIndex:"999"} })
        // } else{
        //     this.setState({ style: { width:"100%"} })
        // }
    }
    gootherpage(){
        history.push()
    }
    pl=(pinglun)=>{
        console.log(pinglun)
    }
    addpinglun(){      //数据库添加评论
        console.log("666")
        if(sessionStorage.username){
            if(this.pinglun.state.value){
                axios.post("/vue/disgass",{
                    av :this.props.match.params.av,
                    username:"koulei",
                    mess:this.pinglun.state.value
                }).then((res)=>{
                    console.log(res)
                })
            }else{
                alert('留言', '您还没有输入留言内容哦', [
                    { text: '取消'},
                    { text: '修改'},
                ]);
            }
        } else {
            alert('留言', '只有登录用户才能留言哦', [
                { text: '再逛逛'},
                { text: '立即登录', onPress: () => history.push("/login") },
            ]);
        }
    }



    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
      }));
    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
          // title: 'title',
          message: '将该视频分享给朋友',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            Toast.info('功能加紧开发中');
            setTimeout(resolve, 1000);
          });
        });
    }







    render(){
        const {
            match
        } = this.props
        const {
            aid,
            avname,
            haveav,
            cid,
            img1,
            img2,
            img3,
            view,
            danmuku,
            coin,
            desc,
            dynamic,
            wsc,
            xz,
            fx,
            pl,
            likevideo,
            img4,
            no,
            imgstyle,
            img5,
            discount,
            noliuyan,
            pinglunstyle
        } =this.state
        //遍历标签  取得各个标签
        const arr =dynamic.split("#")
        for(var i =0 ;i<arr.length;i++){
            if(arr[i]===""){
                arr.splice(i,1);
                i=i-1
            }
        }
        
        return(
            <div style={{backgroundColr:"#E6E6E6"}}>
                <Head title={"Av"+match.params.av}></Head>
                <div style={{marginTop:"45px",}}>
                    <iframe 
                        src={`http://player.bilibili.com/player.html?aid=${aid}&cid=${cid}&page=1`}scrolling="no" 
                        title={avname}
                        border="0" 
                        frameBorder="no" 
                        framespacing="0" 
                        allowFullScreen={true}
                        style={this.state.style}
                        ref="iframe"
                    > 
                    </iframe>
                </div>
                <p style={{margin:"10px 2%"}}>
                    <img src={img1} alt="" style={{width:"20px",height:"20px",display:"inline-block",verticalAlign:"middle"}}/>
                    <span style={{verticalAlign:"middle",fontSize:"14px",color:"#FB7299"}}>热门</span>
                    <span style={{
                        verticalAlign:"middle",
                        marginLeft:"20px",
                        fontWeight:"bold",
                        }}>{avname}</span>
                </p>
                <p style={{margin:"10px 5%",textAlign:"left"}}>
                    <img src={img2} style={{width:"40px",height:"20px",display:"inline-block",verticalAlign:"middle"}} alt=""/>
                    <span style={{verticalAlign:"middle",fontSize:"14px",color:"#FB7299",marginLeft:"10px"}}>{haveav}</span>
                    <span style={{
                        verticalAlign:"middle",
                        marginLeft:"20px",
                        fontSize:"10px"
                    }}>{view}次播放</span>
                    <span style={{
                        verticalAlign:"middle",
                        marginLeft:"10px",
                        fontSize:"10px"
                    }}>{danmuku}条弹幕</span>
                    <span style={{
                        verticalAlign:"middle",
                        marginLeft:"10px",
                        fontSize:"10px"
                    }}>{coin}个硬币</span>
                </p>
                <p style={{margin:"10px 5%",textAlign:"left"}}>
                    <img src={img3} style={{width:"15px",height:"15px",display:"inline-block",verticalAlign:"middle"}} alt=""/>
                    <span style={{verticalAlign:"middle",fontSize:"12px",color:"grey",marginLeft:"10px"}}>未经作者授权禁止转载</span>
                </p>
                <p style={{margin:"5px 5%",textAlign:"left"}}>
                    <span style={{color:"black",fontSize:"14px"}}>简介:</span>
                    <span style={{verticalAlign:"middle",fontSize:"12px",color:"grey",marginLeft:"10px"}}>{desc}</span>
                </p>
                <p style={{margin:"15px 5%",textAlign:"left"}}>
                    {
                        arr.map((k,i)=>{
                            return(
                                <span key={i} style={{
                                    display:"inline-block",
                                    color:"#505050",
                                    backgroundColor:"#F4F4F4",
                                    fontSize:"12px",
                                    height:"20px",
                                    border:"1px solid grey",
                                    borderRadius:"15px",
                                    lineHeight:"20px",
                                    padding:"5px 10px",
                                    marginRight:"10px"
                                }}>{k}</span>
                            )
                        })
                    }
                </p>
                <p style={{margin:"15px 5%",textAlign:"left"}}>
                    <img src={wsc} style={{width:"25px",height:"25px",display:"inline-block",verticalAlign:"middle"}} alt=""/>
                    <span style={{verticalAlign:"middle",fontSize:"12px",color:"grey",marginLeft:"5px"}}>收藏</span>
                    <img src={xz} style={{width:"25px",height:"25px",display:"inline-block",verticalAlign:"middle",marginLeft:"15px"}} alt=""/>
                    <span style={{verticalAlign:"middle",fontSize:"12px",color:"grey",marginLeft:"5px"}}>缓存</span>
                    <img src={fx} style={{width:"25px",height:"25px",display:"inline-block",verticalAlign:"middle",marginLeft:"15px"}} alt=""/>
                    <span onClick={this.showShareActionSheet} style={{verticalAlign:"middle",fontSize:"12px",color:"grey",marginLeft:"5px"}}>分享</span>
                    <img src={pl} style={{width:"25px",height:"25px",display:"inline-block",verticalAlign:"middle",marginLeft:"80px"}} alt=""/>
                    <span style={{verticalAlign:"middle",fontSize:"12px",color:"grey",marginLeft:"5px"}}>评论</span>
                </p>
                <p  style={{margin:"10px 5%",textAlign:"left"}}>
                    <img src={img4} style={{width:"20px",height:"20px",display:"inline-block",verticalAlign:"middle"}} alt=""/>
                    <span style={{verticalAlign:"middle",fontSize:"14px",color:"#FB7299",marginLeft:"10px"}}>猜你喜欢</span>
                </p>
                <div>
                {likevideo.map((lv, index) => {
                    return (
                        <Link key={index} to={`/video/${lv.aid}/${lv.title}`}>
                        <li  style={{
                            listStyle:"none",
                            float:"left",
                            width:"100%"
                        }}
                        >
                            <div style={{float:"left",width:"100%",border:"2px solid #FAFAFA"}}>
                                <img 
                                    src={lv.pic} 
                                    alt=""
                                    style={{
                                        width:"40%",
                                        padding:"10px 4%",
                                        height:"100px",
                                        float:"left",
                                        borderRadius:"30px"
                                    }}
                                />
                                <div style={{
                                    float:"left",
                                    textAlign:"left",
                                    width:"50%"
                                }}>
                                    <p className="p1" style={{
                                        overflow: "hidden",
                                        textOverflow:"ellipsis",
                                        whiteSpace: "nowrap",
                                        paddingTop:"15px",
                                        paddingRight:"5%",
                                        fontSize:"14px",
                                        lineHeight:"16px",
                                        color:"black"
                                    }}>{lv.title}</p>
                                    <p className="p2" style={{
                                        margin:"10px 0"
                                    }}>
                                        <img src={this.state.up} alt="" style={{
                                            width:"25%",
                                            height:"20px",
                                            display:"inline-block"
                                        }}/>
                                        <span style={{
                                            verticalAlign:"top",
                                            marginLeft:"20px",
                                            color:"#FB7299"
                                        }}>{lv.owner.name}</span>
                                    </p>
                                    <p className="p3" style={{
                                        overflow: "hidden",
                                        textOverflow:"ellipsis",
                                        whiteSpace: "nowrap",
                                        fontSize:"10px",
                                        paddingRight:"5%",
                                        color:"black"
                                    }}>简介:{lv.dynamic}</p>
                                </div>
                            </div>
                        </li> 
                    </Link>  
                    ) }
                )}
                </div>
                <div style={imgstyle}>
                <img src={no} alt="" style={{width:"80%",height:"200px",marginLeft:"10%"}}/>
                </div>
                <p  style={{margin:"5px 5%",textAlign:"left"}}>
                    <img src={img5} style={{width:"96px",height:"28px",display:"inline-block",verticalAlign:"middle"}} alt=""/>
                </p>
                <List style={{backgroundColor:"#F5F4F0"}}>
                    <TextareaItem
                        placeholder="不说点什么吗？"
                        data-seed="logId"
                        autoHeight
                        ref={el => this.pinglun = el}
                        rows={2}
                        onChange={this.pl}
                    />
                    <List.Item style={{backgroundColor:"#F5F4F0"}}>
                        <div
                        style={{ width: '25%', color: 'white', textAlign: 'center',float:"right",height:"30px",borderRadius:"15px",lineHeight:"30px",backgroundColor:"#FB7299",fontSize:"14px"}}
                        onClick={()=>this.addpinglun()}
                        >
                        点击留言
                        </div>
                    </List.Item>
                </List>

                {discount.map((ping,i)=>{
                    return(
                        <List key={i}>
                            <Item>{ping.floor}楼 发表于{ping.time}</Item>
                            <Item extra={<span style={{color:"#FB7299"}}>关注</span>} align="top" thumb={<img src={img2} alt=""/>} multipleLine>
                            {ping.id}<Brief>{ping.re}</Brief>
                            </Item>
                        </List>
                    )
                })} 
                <div style={pinglunstyle}>
                <img src={noliuyan} alt="" style={{width:"100%",height:"195px"}}/> 
                </div> 
            </div>
        )
    }
}
export default (props)=><Video {...props} key={props.location.pathname}/>