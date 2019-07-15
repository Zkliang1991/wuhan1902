

import { Carousel, WingBlank } from 'antd-mobile';
import "./index.scss";
import React ,{Component} from "react";
class Banner extends Component{
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: [
              {img:require("@/assets/images/1.jpg"),path:""},
              {img:require("@/assets/images/5.jpg"),path:""},
              {img:require("@/assets/images/2.jpg"),path:""},
              {img:require("@/assets/images/5.jpeg"),path:""},

          ],
        });
      }, 100);
    }
    render() {
      return (
        <WingBlank>
          <Carousel className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            autoplay
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
              <a
                key={index}
                href={val.path}
                style={{
                  display: 'block',
                  position: 'relative',
                //   top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={val.img}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top',height: '100%' }}
                //   onLoad={() => {
                //     // window.dispatchEvent(new Event('resize'));
                //     // this.setState({ imgHeight: 'auto' });
                //   }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      );
    }
  }
  
  export {Banner}
