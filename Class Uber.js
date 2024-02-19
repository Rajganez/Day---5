//Class to calculate Uber price
class Uber{
    static distance = 20; 
    constructor(model,type){
       this.model = model;
       this.type = type;
       
       
    }
getPrice(inr,fare)
{
    if(this.model === "Dzire" && this.type === "sedan"){
        inr = 24.30;
        fare = Uber.distance * inr;
        return `For ${Uber.distance}KM, Model : ${this.model}, Type : ${this.type} & the Price in Rs.${fare}`; 
    }else if(this.model === "Ciaz" && this.type === "sedan"){
        inr = 31.20;
        fare = Uber.distance * inr;
        return `For ${Uber.distance}KM, Model : ${this.model}, Type : ${this.type} & the Price in Rs.${fare}`; 
    }else if(this.model === "Tiago" && this.type === "hatchback"){
        inr = 21.70;
        fare = Uber.distance * inr;
        return `For ${Uber.distance}KM, Model : ${this.model}, Type : ${this.type} & the Price in Rs.${fare}`; 
    }else if(this.model === "Innova" && this.type === "SUV"){
        inr = 40.20;
        fare = Uber.distance * inr;
        return `For ${Uber.distance}KM, Model : ${this.model}, Type : ${this.type} & the Price in Rs.${fare}`;
    }else if(this.model === "Cresta" && this.type === "SUV"){
        inr = 41.75;
        fare = Uber.distance * inr;
        return `For ${Uber.distance}KM, Model : ${this.model}, Type : ${this.type} & the Price in Rs.${fare}`;
}
}
}
let cars = [];
cars.push(new Uber("Dzire","sedan"));
cars.push(new Uber("Ciaz","sedan"));
cars.push(new Uber("Tiago","hatchback"));
cars.push(new Uber("Innova","SUV"));
cars.push(new Uber("Cresta","SUV"));

let getPrice = new Uber;
for(let i in cars){
    console.log(cars[i].getPrice());
}
console.log(`Available Cars : ${cars.model}`);
    
