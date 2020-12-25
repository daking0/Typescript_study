const sayHi = (name:string, age:number, gender:string) : string => {
    return `Hello ${name}, you are a ${gender}`;
};

console.log(sayHi("Hello",24,"male"));

export {};