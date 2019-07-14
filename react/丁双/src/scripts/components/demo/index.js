
import {Button,WhiteSpace} from "antd-mobile";
export class Demo extends Component{
    render(){
        return (
            <div>
                <h2>测试</h2>
                <Button inline>default</Button><WhiteSpace />
                <Button inline disabled>default disabled</Button><WhiteSpace />

                <Button inline type="primary">primary</Button><WhiteSpace />
                <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

                <Button inline type="warning">warning</Button><WhiteSpace />
                <Button inline type="warning" disabled>warning disabled</Button><WhiteSpace />

              
            </div>
        )
    }
}