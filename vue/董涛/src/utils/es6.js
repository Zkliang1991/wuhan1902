// es6 基本语法
// 箭头函数 解构赋值 字符串模板  class Promise async await  对象展开...  let/const  模块 export import 



const keys = "wuhan1902-happy";

// 暴露方式1 ===> module.exports        
export default {
    keys
}
// es6 转 es5 没有转换为 一个对象 不能对象解构 


// 暴露方式 2   exports.init = init; 暴露对象 
export const init = "Are you ok?";

export function getSomeOne() {

}

export class Person {

}

export let add = () => {

}

export const a = "123abc";