

import { observable, action, computed,autorun } from "mobx";

import {axios} from "&";

class Car{
   
    @observable allCartGoods = [];
    @observable deleteGoodsId = [];
    @observable touxiang = localStorage.touxiang;
   
    @action getAllGoods = ()=>{
        if(sessionStorage.user){
            var username = JSON.parse(sessionStorage.user).username;
            axios.get("/react/getAllGoods",{
                params:{
                    username
                }
            })
            .then(res=>{
                // console.log(res.data.result);
                this.allCartGoods = res.data.result.map((item,i)=>{
                    item.checked = false;
                    return item
                })
            })
        }
    }

    @action checkOne=(checked,goodId)=>{
        // console.log("***********");
        // 要删除的商品id总和
        if(!checked){  //选中
            this.deleteGoodsId.push({goodId:goodId});
            console.log(this.deleteGoodsId);
        }else{
           this.deleteGoodsId.map((item,i)=>{
                if(item.goodId == goodId){
                    this.deleteGoodsId.splice(i, 1); 
                    console.log(this.deleteGoodsId);
                }
            })
        }


        this.allCartGoods = this.allCartGoods.map((item,id)=>{
            if(item.goodId==goodId){
                item.checked = !checked;
            }
            return item;
        })
    }

    @action changeQuna=checked=>{
        // console.log("***********");
        // console.log(checked);
        if(checked){
            this.deleteGoodsId = []
            this.allCartGoods.map((item)=>{
                this.deleteGoodsId.push({goodId:item.goodId});
                // console.log(this.deleteGoodsId);
            })
        }else{
            this.deleteGoodsId = []
        }
        this.allCartGoods = this.allCartGoods.map((item,id)=>{
            item.checked = checked;
            return item;
        })
    }
    
    @action changeOneCount = (goodId,flag) =>{
        this.allCartGoods = this.allCartGoods.map((item,id)=>{
            if(item.goodId == goodId){
                item.count += flag?1:-1;
                if(sessionStorage.user){
                    var username = JSON.parse(sessionStorage.user).username;
                    axios.get("/react/updateGoods",{
                        params:{
                            username,
                            goodId,
                            count:item.count
                        }
                    }).then(res=>{

                    })
                }
            }
            return item;
        })
    }

    @action delSelect = ()=>{
        var username = JSON.parse(sessionStorage.user).username;
        // this.deleteGoodsId.map((item)=>{
            // console.log(username);
            // console.log(item.goodId);
            // setTimeout(()=>{
                axios.get("/react/delGoods",{
                    params:{
                        username,
                        goodIds:this.deleteGoodsId
                    }
                }).then(res=>{
                    console.log("************");
                    
                    this.getAllGoods();
                })
            // },200)
        // })
       

    }

    @action shangchuan = (data)=>{
        axios(
            {
            url:'/react/uploadAvatar',
            method:'POST',
            contentType:false,
            processData:false,
            data:data,
            }
            
        ).then(res=>{
            // console.log("****")
            // console.log(res)

             // 上线 http://106.15.237.125:2019/ 改为空
            this.touxiang = res.data.avatarUrl.replace(/public/,'http://106.15.237.125:2019/');
            localStorage.touxiang = this.touxiang;   //保存到本地  
            var username = JSON.parse(sessionStorage.user).username;
            axios.get("/react/updateTouxiang",{
                params:{
                    touxiang:res.data.avatarUrl.replace(/public/,'http://106.15.237.125:2019/'),
                    username
                }
            }).then(res=>{
                // console.log("*************");
                // console.log(res.data);
            })
        })
    }


    @computed get quan(){
        var flag = true;
        this.allCartGoods.forEach((item)=>{
            if(!item.checked){
                flag = false;
            }
        })
        return flag;
    }


    @computed get carNum(){
        var num = 0;
        this.allCartGoods.forEach((item)=>{
            if(item.checked){
                num+= item.count;
            }
        })
        return num;
    }

    @computed get total(){
        var total = 0;
        this.allCartGoods.forEach((item)=>{
            // console.log( item.good.price.substring(1))
            if(item.checked){
                total += item.count  *  item.good.price.substring(1);
            }
        })
        return total;
    }

}

export default new Car()