

const word = "1902daydayup";

export default word;


// ES6 面向对象  封装  继承  多态  


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age; 
    }

    // 静态属性 

    static hobby=["LOL","GAME"]

    // prototype   原型对象  this.prototype.say 
    say(){
        return "wuhan1902 ~~~~~";
    }
}
Person.love = ["book"]

//  super 当对象 指向 父类的 原型对象 prototype
//  super 当函数 指向 父类的 constructor  super()
class Student extends Person{
    constructor(name,age,score){
        super(name,age);  // super() 超类 指向当前 父类 的 constructor;
        this.score = score;
    }

    // 原型对象  prototype 
    say(){     // 方法重载  
        return "daydayup +++++ "  + super.say  
    }

    walk(){   

    }


}