
// mobx 走的观察者模式  
// @observable    count 表明这个数据是  可观察数据  
// @action   发出的通知  通过 mobx 修改数据  可观察数据 

import {observable,action,computed}  from "mobx"
class Demo{
    @observable count =1902;
    @observable usertInfo="";
    @observable storage=""


    @action setCount=()=>{
        this.count+=10
    };
    @action getUsetname=(username)=>{
        this.usertInfo=username
    }

    //初始化和更改sessionStorege
    @action setStorage=(newSesstion)=>{ 
        this.storage=newSesstion
    }
}


export default  new Demo()


