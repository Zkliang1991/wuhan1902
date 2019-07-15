import React , {Component} from "react"
import "./index.scss"
import {Head} from "../../components/head"
import { Grid } from 'antd-mobile';
import {Link} from "react-router-dom"


var vtype =[
    {txt:"综合",path:"/videoType/综合",name:"综合",img:require("../../../assets/images/y1.png")},
    {txt:"短片·手书·配音",path:"/videoType/短片·手书·配音",name:"短片·手书·配音",img:require("../../../assets/images/y2.png")},
    {txt:"MAD·AMV",path:"/videoType/MAD·AMV",name:"MAD·AMV",img:require("../../../assets/images/y3.png")},
    {txt:"MMD·3D",path:"/videoType/MMD·3D",name:"MMD·3D",img:require("../../../assets/images/y4.png")},
    {txt:"国产剧",path:"/videoType/国产剧",name:"国产剧",img:require("../../../assets/images/y5.png")},
    {txt:"海外剧",path:"/videoType/海外剧",name:"海外剧",img:require("../../../assets/images/y6.png")},
    {txt:"VOCALOID·UTAU",path:"/videoType/VOCALOID·UTAU",name:"VOCALOID·UTAU",img:require("../../../assets/images/y7.png")},
    {txt:"单机游戏",path:"/videoType/单机游戏",name:"单机游戏",img:require("../../../assets/images/y8.png")},
    {txt:"电子竞技",path:"/videoType/电子竞技",name:"电子竞技",img:require("../../../assets/images/y9.png")},
    {txt:"鬼畜调教",path:"/videoType/鬼畜调教",name:"鬼畜调教",img:require("../../../assets/images/y10.png")},
    {txt:"影音智能",path:"/videoType/影音智能",name:"影音智能",img:require("../../../assets/images/y11.png")},
    {txt:"人力VOCALOID",path:"/videoType/人力VOCALOID",name:"人力VOCALOID",img:require("../../../assets/images/y12.png")},
    {txt:"三次元舞蹈",path:"/videoType/三次元舞蹈",name:"三次元舞蹈",img:require("../../../assets/images/y13.png")},
    {txt:"宅舞",path:"/videoType/宅舞",name:"宅舞",img:require("../../../assets/images/y14.png")},
    {txt:"连载动画",path:"/videoType/连载动画",name:"连载动画",img:require("../../../assets/images/y15.png")},
    {txt:"完结动画",path:"/videoType/完结动画",name:"完结动画",img:require("../../../assets/images/y16.png")},
    {txt:"服饰",path:"/videoType/服饰",name:"服饰",img:require("../../../assets/images/y17.png")},
    {txt:"美妆",path:"/videoType/美妆",name:"美妆",img:require("../../../assets/images/y18.png")},
    {txt:"健身",path:"/videoType/健身",name:"健身",img:require("../../../assets/images/y19.png")},
    {txt:"T台",path:"/videoType/T台",name:"T台",img:require("../../../assets/images/y20.png")},
    {txt:"美食圈",path:"/videoType/美食圈",name:"美食圈",img:require("../../../assets/images/y21.png")},
    {txt:"日常",path:"/videoType/日常",name:"日常",img:require("../../../assets/images/y22.png")},
    {txt:"搞笑",path:"/videoType/搞笑",name:"搞笑",img:require("../../../assets/images/y23.png")},
    {txt:"国产原创相关",path:"/videoType/国产原创相关",name:"国产原创相关",img:require("../../../assets/images/y24.png")},
    {txt:"国产电影",path:"/videoType/国产电影",name:"国产电影",img:require("../../../assets/images/y25.png")},
    {txt:"欧美电影",path:"/videoType/欧美电影",name:"欧美电影",img:require("../../../assets/images/y26.png")},
    {txt:"演讲• 公开课",path:"/videoType/演讲• 公开课",name:"演讲• 公开课",img:require("../../../assets/images/y27.png")},
    {txt:"趣味科普人文",path:"/videoType/趣味科普人文",name:"趣味科普人文",img:require("../../../assets/images/y28.png")},
    {txt:"汽车",path:"/videoType/汽车",name:"汽车",img:require("../../../assets/images/y29.png")},
    {txt:"野生技术协会",path:"/videoType/野生技术协会",name:"野生技术协会",img:require("../../../assets/images/y30.png")},
    {txt:"机械",path:"/videoType/机械",name:"机械",img:require("../../../assets/images/y31.png")},
    {txt:"手机游戏",path:"/videoType/手机游戏",name:"手机游戏",img:require("../../../assets/images/y32.png")},
    {txt:"网络游戏",path:"/videoType/网络游戏",name:"网络游戏",img:require("../../../assets/images/y33.png")},
    {txt:"GMV",path:"/videoType/GMV",name:"GMV",img:require("../../../assets/images/y34.png")},
    {txt:"日本电影",path:"/videoType/日本电影",name:"日本电影",img:require("../../../assets/images/y35.png")},
    {txt:"桌游棋牌",path:"/videoType/桌游棋牌",name:"桌游棋牌",img:require("../../../assets/images/y36.png")},
]

const typedata = vtype.map((t, i) => ({
    icon: t.img,
    text: t.txt,
    path:t.path
}));

export class Classify extends Component{
    render(){
        return(
            <div>
                <Head title="频道"></Head>
                <div style={{marginTop:"45px",marginBottom:"50px"}}>
                            <Grid data={typedata}
                            columnNum={3}
                            renderItem={dataItem => (
                                <Link to={`${dataItem.path}`}>
                                <div style={{ padding: '12.5px'}}>
                                    <img src={dataItem.icon} style={{ width: '75px', height: '75px' ,margin:"0 auto"}} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                        <span>{dataItem.text}</span>
                                    </div>
                                </div>  
                                 </Link>
                            )}
                        />
                </div>
            </div>
        )
    }
}