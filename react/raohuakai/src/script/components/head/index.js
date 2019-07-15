


import React,{Component} from "react";
import { NavBar, Icon ,Popover} from 'antd-mobile';
import "./index.scss";
import{withRouter} from "react-router-dom"

const Item = Popover.Item;
class Head1 extends Component{
    state={
        show:true,
        searchbtn:true
    }
    //渲染组建时执行的钩子函数
    componentWillMount(){
        console.log("this.props",this.props)
        this.props.title==="首页"&&this.setState({
            show:false
        })
        this.props.title==="搜索"&&this.setState({
            searchbtn:false
        })
    }
    //返回上一页
    goBack=()=>{
        this.props.history.go(-1)
    }
    //点击搜索
    headSearch=()=>{
        this.props.history.push("/search");
    }
    // ==================
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };

    // ==============
    render(){
        const {
            title,
        }=this.props
        const {
            show,
            searchbtn
        }=this.state
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={show&&<Icon type="left" onClick={this.goBack}/>}
                    rightContent={[
                        searchbtn&&<Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.headSearch}/>,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    rightContent={
                        <Popover 
                            mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                            (<Item key="4" value="scan"  data-seed="logId">设置</Item>),
                            (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                            (<Item key="6" value="button ct" >
                                <span style={{ marginRight: 5 }}>扫一扫</span>
                            </Item>),
                            ]}
                            align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                            }}
                            >
                            {searchbtn&&<Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.headSearch}/>}
                            <Icon key="1" type="ellipsis" />
                            

                            </div>
                         </Popover>
                    
                    }
                >{title}</NavBar>
            </div>
        )
    }
}
var Head=withRouter(Head1)
export {Head}