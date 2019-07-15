import React,{Component} from "react";
import { Chart, Tooltip, Axis, Bar,Legend, Pie, Coord } from 'viser-react';
import "./index.scss";
import {Head} from "../../components/head";
import {connect} from "react-redux";
import { getAddSubject } from "../../actions";
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';
const DataSet = require('@antv/data-set');
@connect(
    state=>{
        return{
            addSubject:state.data.addSubject
        }
    }
)
class Zhuzhuangtu extends Component{
    constructor(props) {
        super(props);
        this.state={
            clientWidth1:2000,
            clientWidth2:0
        }
        this.saveRef = ref => {this.refDom = ref};
        this.saveRef2 = ref => {this.refDom2 = ref};
      }
    //初始化请求
    initSubjectData(){
        this.props.dispatch(getAddSubject("/react/addSubject"));
        //获取滑动条的长度
        const {clientWidth, clientHeight} = this.refDom;
       
        this.setState({
            clientWidth1:clientWidth,
            
        })
    }
    //获取柱状图的父盒子宽度
    getZhuzhuangtuAddWidth=()=>{
        const {clientWidth, clientHeight}=this.refDom2
        this.setState({
            clientWidth2:clientWidth
        })
    }
    //钩子函数
    componentDidMount(){
        this.initSubjectData()
        this.getZhuzhuangtuAddWidth()
    }
    //滑动时输出
    log = (name) => {
        return (value) => {
            document.getElementsByClassName("zhuzhuangtu-add")[0].style.transform=`translateX(-${value}px)`;
        //   console.log(`${name}: ${value}`);
        };
      };
    render(){
        const {
            addSubject
        }=this.props
        //柱状图库
        const data=addSubject.map((item,i)=>{
            return {
                year:item.name,
                sales:item.result
            }
        })
        const scale = [{
            dataKey: 'sales',
            tickInterval:10,
        }];
        //   ==================

        //饼库
        const sourceData = [
            { item: '60分以下', count: (this.props.addSubject.filter((item,i)=>item.result<60)).length },
            { item: '60分-69分', count: (this.props.addSubject.filter((item,i)=>item.result>=60&&item.result<70)).length },
            { item: '70分-79分',count: (this.props.addSubject.filter((item,i)=>item.result>=70&&item.result<80)).length },
            { item: '80分-89分', count: (this.props.addSubject.filter((item,i)=>item.result>=80&&item.result<90)).length },
            { item: '90分以上', count: (this.props.addSubject.filter((item,i)=>item.result>=90)).length }
        ];
        
        const scale2 = [{
            dataKey: 'percent',
            min: 0,
            formatter: '.0%',
        }];
        
        const dv = new DataSet.View().source(sourceData);
        dv.transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });
        const data2 = dv.rows;
        const {
            clientWidth1,
            clientWidth2
        }=this.state;
        return(
            <div>
                <div className="head-position">
                <Head title="图表分析"></Head>
                </div>
                <div className="head-cen"></div>

                <div className="zhuzhuangtu-box" ref={this.saveRef2}>
                    <p style={{marginTop:"10px"}}>个人成绩分析</p>
                    <div className="zhuzhuangtu-add" ref={this.saveRef}>
                        <Chart forceFit height={400} data={data} scale={scale}>
                            <Tooltip/>
                            <Axis />
                            <Legend offsetX="20px"/>
                            <Bar position="year*sales" />
                        </Chart>
                    </div>
                </div>
                <div className="am-slider-example">
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                    <p className="sub-title">滑动查看完整个人成绩</p>
                    <Slider
                        style={{ marginLeft: 30, marginRight: 30 }}
                        defaultValue={0}
                        min={0}
                        max={clientWidth1-clientWidth2}
                        onChange={this.log('change')}
                        onAfterChange={this.log('afterChange')}
                    />
                    </WingBlank>
                </div>






                <div>
                    <p>成绩范围分布</p>
                    <Chart forceFit height={400} data={data2} scale={scale2}>
                    <Tooltip showTitle={false} />
                    <Coord type="theta" />
                    <Axis />
                    <Legend dataKey="item" />
                    <Pie
                    position="percent"
                    color="item"
                    style={{ stroke: '#fff', lineWidth: 1 }}
                    label={['percent', {
                        formatter: (val, item) => {
                        return item.point.item + ': ' + val;
                        }
                    }]}
                    />
                </Chart>
                </div>
            </div>
        )
    }
}

export {Zhuzhuangtu}