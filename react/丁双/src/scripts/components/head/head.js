
import "./index.scss";
import {NavBar,Icon,Popover} from "antd-mobile";
import PropTypes from "prop-types";
import {history} from "&";
const Item = Popover.Item;
import {connect} from "react-redux";
import { setTab } from "../../actions";
@connect(
    state=>{
        return {
            oldUrl:state.myUrl.oldUrl
        }
    }
)
export class Head extends Component{
    state = {
        search:true
    }
    goback=(show)=>{
        if(show){
            history.go(-1);
            // 返回高亮没有做   必须记住跳转到首页之前的页面 localStorage
            const {oldUrl} = this.props;
            this.props.dispatch(setTab(oldUrl));
        }
    }
    componentDidMount(){
        const hash = location.hash;
        const tab = hash.split("/")[1];
        // console.log(tab);
        if(tab == "search"){
            this.setState({
                search:false
            })
        }
    }
   
    goSearch=()=>{
        history.push("/search");
    }
    gotoLogin=()=>{
        history.push("/login");
    }
    render(){
        const {
            title,
            show,
            search
        } = this.props;
        return (
            <NavBar
            mode="dark"
            icon={show&&<Icon type="left" />}
            onLeftClick={() => this.goback(show)}
            rightContent={[
                !search&&<Icon key="0" onClick = {this.goSearch} type="search" style={{ marginRight: '16px' }} />,
                <Pop key = "1"/>
            ]}
            >{title}</NavBar>
        )
    }
}
Head.propTypes={
    title:PropTypes.string.isRequired
}

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Pop extends Component{
    state  ={
        visible:false
    }
    handleVisibleChange = (visible)=>{
        this.setState({
            visible
        });
        
    }
    onSelect = (opt)=>{
        // console.log(opt);
        this.setState({
            visible:false,
            selected:opt.props.value,
        });
        if(opt.props.value == "login"){
            this.gotoLogin();
        }
        if(opt.props.value == "scan"){
            history.push("/scan");
        }
        if(opt.props.value == "mine"){
            history.push("/app/my");
        }

    }
    gotoLogin=()=>{
        history.push("/login");
    }
    render(){
        return (
            <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
              (<Item key="5" value="login" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>Login</Item>),
              (<Item key="6" value="mine" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>Mine</span>
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
              <Icon type="ellipsis" />
            </div>
          </Popover>
        )
    }
}
