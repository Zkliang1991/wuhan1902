// 封装轮播图组件 sweiper
import React, { Component } from "react";
import Swiper from "swiper";
 
export class Swipe extends Component {
    render() {
        console.log(this.props);

        const {
            children,
            id
        } = this.props;

        return (
            <div className="swiper-containers" style={{width:"100%"}} id={id}>
                <div className="swiper-wrapper" style={{width:"100%"}} >

                    {
                        children
                    }

                </div>
                {/* <div className="swiper-pagination"></div> */}
            </div>
        );
    }

    componentDidMount() {
        // 同步数据刷新
        const {
            id,
            options,
            children
        } = this .props;

        if(children.length>0){
            const mySwiper = new Swiper("#"+id,options);
        }
    }

    // componentDidUpdate() {
    //     // 异步数据刷新
    //     const {
    //         id,
    //         options,
    //         children
    //     } = this .props;

    //     if(children.length>0){
    //         const mySwiper = new Swiper("#"+id,options);
    //     }
        
    // }
}

// 静态属性
Swipe.Item = (props) =>{
    return (
        <div className="swiper-slide" style={{width:"100%"}} >
            {props.children}
        </div>
    )
}