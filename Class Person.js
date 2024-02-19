class Person{
    constructor(name,age,gender,job,city) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.job = job;
        this.city = city;
        
    }
}
let persons = [];
persons.push(new Person("Raj",27,"M","Developer","Coimbatore",));
persons.push(new Person("Mani",28,"M","Tester","Trichy",));
persons.push(new Person("Naga",27,"M","Gamer","Chennai",));
persons.push(new Person("Radha",26,"F","Artist","Coimbatore",));
for(let i in persons) {
    console.log (persons[i]);
}
