

const msg = "DDS daydayup";

export default msg;


class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    static hobby = ["LOL","GAME"]   //静态属性 不参与继承 与this 无关

    //prototype 原型对象  this.prototype.say
    say(){
        return "wuhan1902~~~~";
    }
}
Person.love = ["book"]   //静态属性   不参与继承  与this无关


// 继承     super当对象使用时 指向父类的 原型
            // super当函数使用时 指向父类的 constructor
class Student extends Person{
    constructor(name,age,score){
        super(name,age);    //函数时  超类，指向指向当前父类的 constructor 构造函数;
        this.score = score;
    }
    //原型对象   prototype
    say(){  //方法重载
        return "daydayup" + super.say;
    }
    walk(){

    }
}