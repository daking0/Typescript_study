// interface Human{
//     name : string,
//     age:number,
//     gender:string
// } 
//인터페이스는 js로 변환되지 않는다. => index.js에 나타나지 않음.
class Human {
    public name :string;
    public age : number;
    public gender : string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const dakyung = new Human("dakyung",27,"female");

// const person = {
//     name : "nicolas",
//     age:22,
//     gender : "male"
// }
const sayHi = (person) : string => {
    return `Hello ${person.name},your age is ${person.age} you are a ${person.gender}!`;
};

console.log(sayHi(dakyung));

export {};