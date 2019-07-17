import React, { Component } from 'react';

import Swiper from 'swiper';
import SwipeSide from '../swipe-side';



export class Swipe extends Component {
    render() {
        const { id, options, constyle } = this.props;
        return (
            <div className="swiper-container" style={constyle} id={id}>
                <div className="swiper-wrapper" style={constyle}>
                    {this.props.children}
                </div>
                <SwipeSide></SwipeSide>
            </div>
        )
    }
    componentDidUpdate() {
        if (this.props.children.length) {
            new Swiper('#' + this.props.id, this.props.options);
        }
    }
}

//静态属性
Swipe.item = (props) => {
    return (
        <div className="swiper-slide" style={props.constyle}>
            {props.children}
        </div>
    )
}