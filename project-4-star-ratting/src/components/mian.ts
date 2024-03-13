

class Person {
    constructor(public name:string,public age:number,public designation:string){
        name = this.name;
        age = this.age;
        designation= this.designation
    }
    fullname(){
        console.log(`${this.name} is ${this.age} years old.He is the ${this.designation} of this company`)
    }
    
}

const p1 = new Person("limon",10,'ceo')

console.log(p1.name)



