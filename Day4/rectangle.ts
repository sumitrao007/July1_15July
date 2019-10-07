import {Shape} from './Shape';

export class Rectangle extends Shape{
    length:number;
    breadth:number;
    result:number

    constructor(length:number,breadth:number){
        super();
        this.length=length;
        this.breadth=breadth;

    }
    area():void{
        this.result=this.length*this.breadth;
    }

    display(){
        console.log(`
            -------------------Reactangel Area-------
            Length is ${this.length}
            breadth Is ${this.breadth}
            Area is ${this.result}
        `);
    }


}