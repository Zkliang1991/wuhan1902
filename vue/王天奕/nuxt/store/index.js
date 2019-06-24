import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);




const store =()=>{
  return new Vuex.Store({
    
        state:{
            su:0
        },
        actions:{
            suAdd(context,num){
                context.commit("suAdd",num);
            }
        },
        mutations:{
            suAdd(state,num){
                if(num>=0){
                    state.su=num
                }else{state.su++;}
                
            }
        },
        getters:{

        }
    });    
}    
 



export default store;