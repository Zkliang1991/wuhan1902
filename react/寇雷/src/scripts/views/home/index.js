import React , {Component} from "react"
import "./index.scss"
import { Tabs, WhiteSpace, Badge,Carousel,SegmentedControl,WingBlank,Modal,Pagination, Icon} from 'antd-mobile';
import {Link} from "react-router-dom"
import {axios} from "../../../utils"
const alert = Modal.alert;
const tabs = [
    { title: <Badge>游戏</Badge> },
    { title: <Badge>推荐</Badge> },
];

export class Home extends Component{
    state = {
        data: ['1', '2', '3','4','5'],
        imgHeight: 107,
        mb:0,
        videos:[],
        allT:1000,
        allY:100,
        up:require("../../../assets/images/up.png"),
        num:10,
        currentPage:1,
        game : [],
        mobileGame:[]
    }
    async componentWillMount(){
        await axios.get("/vue/anima").then(res=>{   //游戏轮播图请求
            this.setState({
                data:res.data.result
            })
        })
        if(sessionStorage.gamelist){       //游戏列表请求
            console.log("目前本地数据库有游戏列表")
            this.setState({
                game : JSON.parse(sessionStorage.gamelist),
                mobileGame : this.state.game.filter((item,i) =>item.type===0)
            })
        } else{
            await axios.get("/vue/game").then(res=>{
                console.log("目前本地数据库没有游戏列表")
                sessionStorage.gamelist = JSON.stringify(res.data.game)
                this.setState({
                    game:res.data.result,
                    mobileGame : this.state.game.filter(item =>item.type===this.state.mb)
                })
            })
        }
        await axios.get("/vue/bilibili",{
            params:{
                pageNo:1
            }
        }).then(res=>{
            this.setState({
                videos : res.data.result,
                allT : res.data.total,
                allY : res.data.totalPage,
                num : res.data.pageSize
            })
        })
    }
    onChange=(e)=>{
        console.log(e.nativeEvent.selectedSegmentIndex)
        switch (e.nativeEvent.selectedSegmentIndex+1) {
            case 1:
                this.setState({
                    mb:1,
                    mobileGame : this.state.game.filter(item =>item.type===this.state.mb)
                })
                break;
            case 2:
                this.setState({
                    mb:2,
                    mobileGame : this.state.game.filter(item =>item.type===this.state.mb)
                })
                break;
            case 3:
                this.setState({
                    mb:3,
                    mobileGame : this.state.game.filter(item =>item.type===this.state.mb)
                })
                break;
            default:
                break;
        }
    }
    //----------------------------------------首页游戏逻辑--------------------------------------------//
    activepage=(nowpage)=>{
        console.log(nowpage,this)
        this.setState({
            currentPage:nowpage
        })
        axios.get("/vue/bilibili",{
            params:{
                pageNo:nowpage
            }
        }).then(res=>{
            this.setState({
                videos :res.data.result
            })
        })
    }
    render(){
        console.log(this.state.mobileGame)
        return(
            <div style={{marginBottom:"50px"}}>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    tabBarBackgroundColor="#FB7299"
                    tabBarActiveTextColor="white"
                    tabBarInactiveTextColor="white"
                    swipeable={false}
                    >
                    <div style={{backgroundColor: '#FAFAFA' ,overflow:"hidden",paddingTop:"20px"}}>
                        <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        beforeChange={() => console.log()}
                        afterChange={index => this.setState({ slideIndex: index })}
                        dots={false}
                        >
                        {this.state.data.map((val, index) => {
                        return    (
                                <Link
                                key={val}
                                to={`/search/${val.title}`}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                                >
                                <img
                                src={val.pic}
                                alt="网络出错,加载失败"
                                style={{ width: '100%',height:"107px",verticalAlign: 'top',border:"0" }}
                                onLoad={() => {
                                console.log()
                                }}
                            />
                            </Link>
                         ) }
                        )}
                        </Carousel>
                        <p style={{marginTop:"15px",textAlign:"left",marginLeft:"20px",color:"#2CC3F2"}}>游戏列表</p>
                        <WingBlank>
                        <SegmentedControl
                            values={['手游', '页游', '端游']}
                            onChange={this.onChange}
                            onValueChange={this.onValueChange}
                            style={{marginTop:"10px",height:"30px"}}
                            tintColor="#FB7299"
                            selectedIndex={this.state.mb}
                        />
                        </WingBlank> 
                        <div style={{marginTop:"20px",marginBottom:"50px"}}>
                            {
                                this.state.mobileGame.map((gm,i)=>{
                                    return(
                                    
                                        
                                        <li key={i} style={{
                                            listStyle:"none",
                                            width:"40%",
                                            height:"145px",
                                            display:"inline-block",
                                            margin:"10px 10px 0 10px",
                                            borderBottom:"1px solid #e1e1e1",
                                            boxShadow:"0px 2px 2px #F3F3F3",
                                            backgroundColor:"#fff",
                                            textAlign:"center"
                                        }}>
                                            <img src={gm.image} alt="网络出错,加载失败" style={{width:"150px",height:"80px",}}/>
                                            <p style={{
                                                fontSize:"12px",
                                                textAlign:"left",
                                                lineHeight:"16px",
                                                margin:"2px 7px",
                                                overflow: "hidden",
                                                textOverflow:"ellipsis",
                                                whiteSpace: "nowrap",
                                            }}>{gm.title}</p>
                                            <p style={{
                                                fontSize:"12px",
                                                textAlign:"left",
                                                lineHeight:"16px",
                                                overflow: "hidden",
                                                textOverflow:"ellipsis",
                                                whiteSpace: "nowrap",
                                                margin:"2px 7px"
                                            }}>{gm.summary}</p>
                                            <span style={{
                                                width:"60px",
                                                border:"1px solid #2cbdf0",
                                                borderRadius:"5px",
                                                marginLeft:"87px",
                                                fontSize:"12px",
                                                lineHeight:"22px",
                                                textAlign:"center",
                                                color:"#2cbdf0",
                                                display:"block"
                                                }}
                                                onClick={()=> 
                                                    alert('跳转', '点击确定将离开本页面,是否确定？', [
                                                    { text: '否'},
                                                    { text: '确定', onPress: () =>{
                                                        var url = gm.website
                                                        console.log(url)
                                                        window.location.href = url
                                                    }},
                                                  ])}
                                            >
                                                进入官网
                                            </span>
                                        </li>
                                        
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div style={{backgroundColor: '#F5F4F0' }}>
                        <p style={{marginTop:"10px",textAlign:"left",marginLeft:"20px",fontSize:"14px",color:"black"}}>综合</p>
                        <Carousel
                        autoplay
                        infinite
                        beforeChange={() => console.log()}
                        afterChange={index => this.setState({ slideIndex: index })}
                        dots={false}
                        style={{marginTop:"5px",padding:"5px 0",borderTop:"1px solid #EAEAEA",borderBottom:"1px solid #EAEAEA"}}
                        >
                        {this.state.data.map((val, index) => {
                        return    (
                                <a
                                key={val}
                                href="http://localhost:3000/#/search"
                                style={{
                                    display: 'inline-block',
                                    width: '100%',
                                    height: this.state.imgHeight
                                }}
                                >
                                <img
                                src={val.create}
                                alt=""
                                style={{ width: '100%',height:"107px",verticalAlign: 'top',border:"0" }}
                                onLoad={() => {
                                console.log()
                                }}
                            />
                            </a>
                         ) }
                        )}
                        </Carousel>
                        <div style={{}}>
                            {this.state.videos.map((val, index) => {
                                return (
                                    <Link key={index} to={`/video/${val.aid}/${val.title}`}>
                                    <li  style={{
                                        listStyle:"none",
                                        float:"left",
                                        width:"100%"
                                    }}>
                                        <div style={{float:"left",width:"100%",border:"2px solid #FAFAFA"}}>
                                            <img 
                                                src={val.pic} 
                                                alt=""
                                                style={{
                                                    width:"50%",
                                                    padding:"10px 5%",
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
                                                }}>{val.title}</p>
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
                                                    }}>{val.owner.name}</span>
                                                </p>
                                                <p className="p3" style={{
                                                    overflow: "hidden",
                                                    textOverflow:"ellipsis",
                                                    whiteSpace: "nowrap",
                                                    fontSize:"10px",
                                                    paddingRight:"5%",
                                                    color:"black"
                                                }}>简介:{val.dynamic}</p>
                                            </div>
                                        </div>
                                    </li> 
                                </Link>  
                                ) }
                            )}
                        </div>
                        <Pagination total={this.state.allY}
                            className="custom-pagination-with-icon"
                            current={this.state.currentPage}
                            style={{
                                float:"left",
                                marginTop:"10px",
                                width:"90%",
                                marginLeft:"5%"
                            }}
                            ref={el=>this.nowpage=el}
                            onChange={this.activepage}
                            locale={{
                                prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
                                nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
                            }}
                        />
                    </div>
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}