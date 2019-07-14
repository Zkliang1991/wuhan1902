import {TabBar} from "antd-mobile";
import {foots} from "../foot";
import "./index.scss";
// import PropTypes from "prop-types"; 
import {connect} from "react-redux";

import {history} from "&";
import { setTab, setNewUrl } from "../../actions";
import { observer } from "mobx-react";
import car from "~/mobx/car";



@connect(
    state=>{
        return {
            tab:state.myUrl.tab,
        }
    }
)
@observer
export class MFoot extends Component{
    state = {
        foots,
        // selectedTab:"home"
    }
    componentWillMount(){
        const hash = location.hash;
        const tab = hash.replace("#/app/",'');
        this.props.dispatch(setTab(tab));
        this.props.dispatch(setNewUrl(tab));
    }
    render(){
        const {carNum} = car;
        return (
            <div className = "mFoot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    {
                        this.state.foots.map((foot,i)=>{
                            return (
                                <TabBar.Item
                                    title={foot.txt}
                                    key={i}
                                    icon={<i style={{
                                    width: '22px',
                                    height: '22px',
                                    display:"block" 
                                    }}
                                    className = {"iconfont icon "+foot.icon}
                                    />
                                    } 
                                    selectedIcon={<i style={{
                                    width: '22px',
                                    height: '22px',
                                    display:"block" 
                                    }}
                                    className = {"iconfont icon "+foot.icon}
                                    />
                                    }
                                    // selected={this.state.selectedTab === foot.name}
                                    selected={this.props.tab === foot.name}
                                    badge={i==2&&carNum}
                                    onPress={() => {
                                        this.props.dispatch(setTab(foot.name));
                                        history.push(foot.path);
                                    }}
                                    data-seed="logId"
                                >
                            </TabBar.Item> 
                            )
                        })
                    }
                
                </TabBar>
            </div>
        )
    }
}
// MFoot.contextTypes = {
//     history:PropTypes.object.isRequired,
//     match:PropTypes.object.isRequired,
//     location:PropTypes.object.isRequired,


// }