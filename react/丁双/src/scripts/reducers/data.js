import { GETGOODTYPES, GETALLGOODS, REVERSEGOODS, GETDETAILGOOD, GETSEARCH, REVERSESEARCHGOODS, GETCARTALLGOODS, CHACKONE, QUANXUAN, CHANGEQUAN} from "../actions";


const defaultState = {
    count:8888,
    types:[],
    allGoods:[],
    good:[],
    searchGoods:[],
    allCartGoods:[],
    quan:false,
    totalNum:0,
    totalPrice:0
}

export const data = (state=defaultState,action)=>{
    // console.log(action.type)
    switch(action.type){

        case GETSEARCH:
        return {...state,searchGoods:action.data};
        break;

        case GETDETAILGOOD:
        return {...state,good:action.good};
        break;
        
        case GETALLGOODS:
        return {...state,allGoods:action.allGoods};
        break;
            
        case GETGOODTYPES:
        return {...state,types:action.types};
        break;
        
        case REVERSEGOODS: 
        // 可变对象监听不到， 不可变对象才监听的到
        return {...state,allGoods:state.allGoods.reverse(),count:++state.count};
        break;

        case REVERSESEARCHGOODS:
        return {...state,searchGoods:state.searchGoods.reverse(),count:++state.count}
        break;

        case GETCARTALLGOODS:
        return {...state,allCartGoods:action.allCartGoods}
        break;

        case CHACKONE:
        return {...state,allCartGoods:action.allCartGoods}
        break;
        
        // quan控制单选
        case QUANXUAN:
        return {...state,allCartGoods:action.allCartGoods,quan:action.checked}
        break;

        // 单选控制多选
        case CHANGEQUAN:
        return {...state,quan:action.flag}
        break;

        default:
        return state
        break;
    }
}