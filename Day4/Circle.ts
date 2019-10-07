import {Shape} from './Shape';

export class Circle extends Shape{
    radius:number;
    result:number;

    constructor(radius:number){
        super();

        this.radius=radius;

    }

    area():void{
        this.result=3.14*this.radius*this.radius;
    }

    display(){
        console.log(`
        ------------Circle Area Is-------------
        Radius is ${this.radius}
        Area is ${this.result}
        `);
    }

    Disp_circle(){
        console.log("Circle Display for Hirachi");
    }

}
