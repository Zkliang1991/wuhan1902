import {observable,action,computed} from "mobx";

class UserInfo{
    @observable userInfo={};
    @observable isLogin = false
    @observable mobile ="";

    @action getInfo = (userInfo,isLogin,mobile)=>{
        this.userInfo = userInfo;
        this.isLogin = isLogin;
        this.mobile = mobile;
    }
}

export default new UserInfo();