


const defaultState={
    msg:"测试"
}

export const test=(state=defaultState,action)=>{
   switch(action.type){
        default:
            return state
        break;
   }
}