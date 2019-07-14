

import "./index.scss";
import { List, WhiteSpace, Modal} from 'antd-mobile';
const Item = List.Item;
import {Link} from "react-router-dom";
const alert = Modal.alert;


export class MyList extends Component{
    render(){
        return (
            <div>
                <div >
                <WhiteSpace/>
                <List 
                className="my-list"
                onClick={() =>
                    alert('警告', '你要跳转首页吗', [
                      { text: 'Cancel', onPress: () => console.log('cancel') },
                      { text: 'Ok', onPress: () => console.log('ok') },
                    ])
                  }
                >
                    <Item extra={'>'}>支付</Item>
                </List>
                <WhiteSpace/>
                <List 
                className="my-list"
                onClick={() =>
                    alert('警告', '你要跳转详情吗', [
                      { text: 'Cancel', onPress: () => console.log('cancel') },
                      { text: 'Ok', onPress: () => console.log('ok') },
                    ])
                  }
                >
                    <Item extra={'>'}>相册</Item>
                </List>
                <WhiteSpace/>
                    <List className="my-list">
                <Link to = "/comment">
                        <Item extra={'>'}>商品评论</Item>
                </Link>
                    </List>
                <WhiteSpace/>
                <List className="my-list">
                    <Link to = "/login">
                        <Item extra={'>'}>切换用户</Item>
                    </Link>
                </List>
                </div>
            </div>
        )
    }
}