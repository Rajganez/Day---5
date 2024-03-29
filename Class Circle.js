class Circle {
    constructor(Radius,Color){
    this.radius = 1.0;
    this.color = "Red";
    }
getRadius()
{
    this.radius = 3.0;
    return `${this.radius}`; //Get the radius
}
getColor(){
    this.color = "Blue";
    return `${this.color}`;
}
toString(){
    return `Circle : [radius = ${this.radius}, color = ${this.color}]`;

}
getArea(r,area){
    r = this.radius;
    area = Math.PI * r * r ; //Area of a circle is A = πr^2
    return `${area}`; 
}
getCircumference(circum,r){
r = this.radius;
circum = 2 * Math.PI * r ; //Circumference of a circle is C = 2πr
return `${circum}`; 
}
}
let Radius = new Circle;
let Color = new Circle;
let setRadius = new Circle;
let setColor = new Circle;
console.log(`Radius before set : ${Radius.radius}, Color before set : ${Radius.color}`);
console.log("Radius set to : ",setRadius.getRadius());
console.log("Color set to : ",setColor.getColor());
console.log(Radius.toString());
 console.log(`Area before radius value set : ${Radius.getArea()},
 Area after radius value set : ${setRadius.getArea()}`); 
console.log(`Circumference before radius value set : ${Radius.getCircumference()},
Circumference after radius value set : ${setRadius.getCircumference()}`); 

//Output :
// Radius before set : 1.00, Color before set : Red
// Radius set to :  3
// Color set to :  Blue
// Circle : [radius = 1, color = Red]
// Area before radius value set : 3.141592653589793,
// Area after radius value set : 28.274333882308138
// Circumference before radius value set : 6.283185307179586,
// Circumference after radius value set : 18.84955592153876
