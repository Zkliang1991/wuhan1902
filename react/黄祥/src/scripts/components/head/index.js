import React from 'react';
import "./index.scss";
import { NavBar, Icon } from 'antd-mobile';
import { createHashHistory } from 'history';
const history = createHashHistory();

export class Head extends React.Component {
    goback(){
        history.go(-1)
    }
    gosearch(){
        history.push("/search")
    }
    render() {
        return (
            <div style={{display:"fixed",top:"0"}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.goback()}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={() => this.gosearch()}/>,
                    ]}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}