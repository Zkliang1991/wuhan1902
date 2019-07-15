import React , {Component} from "react"
import "./index.scss"
import { NavBar, Icon } from 'antd-mobile';
import PropTypes from "prop-types"
import {history} from "../../../utils"

export class Head  extends Component{
    goback(show){
        if(!show){
            history.go(-1)
        }
    }
    gosearch(){
        history.push("/search")
    }
    render(){
        const {
            title,
            show
        } = this.props;
        return(
            <div>
            <NavBar
                mode="dark"
                style={{
                    backgroundColor:"#FB7299",
                    position:"fixed",
                    top:0,
                    width:"100%",
                    
                }}
                icon={!show&&<Icon type="left"/>}   //show&&show为真执行后面的为假则不执行
                onLeftClick={()=>this.goback(show)}
                rightContent={[
                <Icon key="0" onClick={this.gosearch} type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis"/>,
                ]}
          >{title}</NavBar>
            </div>
        )
    }
}

Head.propTypes={
    title:PropTypes.string.isRequired
}