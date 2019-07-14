


export class Video extends Component{
    render(){
        return (
            <div>
                <video 
                controls
                autoPlay = "autoplay"
                loop
                style = {{
                    width:"100%",
                    height:"230px"
                }}
                src="http://video.toread.com.cn/%E5%AE%98%E7%BD%91/mountain_143.mp4
                "></video>
            </div>
        )
    }
}