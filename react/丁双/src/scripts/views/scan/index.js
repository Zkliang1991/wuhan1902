


import "./index.scss";
import { Head } from "../../components/head/head";

import {takePhoto} from "&";

export class Scan extends Component{

    photo = ()=>{
        takePhoto();
    }

    // componentWillUnmount(){
    //     scan.close();
    // }
    // componentDidMount(){
        
    // 	function startScan(){
    // 		scan = new plus.barcode.Barcode('bcid');
    // 		scan.start();
    // 		scan.onmarked = function(type,result){
    // 			var text = '未知: ';
	// 			switch(type){
	// 				case plus.barcode.QR:
	// 				text = 'QR: ';
	// 				break;
	// 				case plus.barcode.EAN13:
	// 				text = 'EAN13: ';
	// 				break;
	// 				case plus.barcode.EAN8:
	// 				text = 'EAN8: ';
	// 				break;
	// 			}
	// 			alert( text+result );
	// 			mui.openWindow({
	// 				url:result
	// 			})
	// 		 }
    // 	}
    // 	startScan();
    // 	mui.init({
	// 		beforeback: function(){
	// 			scan.close();
	// 			return true;
	// 		}
	// 	});
    // }
    render(){
        return (
            <div>
                <Head title = "扫一扫" show = {true}/>
                <button onClick = {this.photo}>拍照</button>
                <div id="bcid">
		    	
		        </div>
            </div>
        )
    }
}