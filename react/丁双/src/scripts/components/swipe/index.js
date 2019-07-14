

// 封装 swiper 组件轮播图  new Swiper

export class Swipe extends Component{
    
    render(){
        const {id} = this.props;
        return (
            <div className="swiper-container" id = {id}>
                <div className="swiper-wrapper">
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentDidMount(){
        const {
            id,
            options,
            children
        } = this.props;
        if(children.length>0){
            const MySwiper = new Swiper("#"+id,options)
        }
    }
    // 异步数据刷新
    componentDidUpdate(){
        const {
            id,
            options,
            children
        } = this.props;
        if(children.length>0){
            const MySwiper = new Swiper("#"+id,options)
        }
    }
}

//  静态属性
Swipe.Item = (props)=>{
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    )
}

