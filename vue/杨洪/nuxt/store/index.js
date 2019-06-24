
import Vue from "vue"

import Vuex from "vuex"

Vue.use(Vuex)




const store=()=> {
    return new Vuex.Store({
        state:{
            count:1902,
            city:"武汉",
            login:{},
            good:[],
            
        },
        actions:{
    
        },
        mutations:{
    
        },
        getters:{
    
        }
    })
    

}

export default store;