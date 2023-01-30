class grattings{
    hello(){
        console.log("Hello Everyone!");
    }
    salam(){
        console.log("Salam Everyone!");
    }
}
let a = new grattings();
a.hello();
a.salam();


//---------------------------------- METHOD TYPES -----------------------------//
//There are Three types of class methods in JavaScript.

// The first one is Constructor Method.
// The second one is Instance/Prototype Method.
// The third one is Static Method.
class student{
    constructor(name, age, email){
        this.username = name;
        this.userage = age;
        this.useremail = email;
        console.log("Constructor Method called");
    }
    hello(){
        document.write(`Hi ${this.username}, your age is ${this.userage}.`);
    }
    static staticMethod(){
        console.log("Static Method called");
    }
}
let b = new student("Raza",20);
let c = new student("Hadi",21);
b.hello();
c.hello();
// b.ststicMethod();          ------ This will not work
student.staticMethod();       // this will work properly