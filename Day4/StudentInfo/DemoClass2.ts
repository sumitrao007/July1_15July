export class Student{
    firstname:string;
    lastname:string;
    rollno:number;

    // constructor(){
    //     this.firstname="";
    //     this.lastname="";
    //     this.rollno=0;
    // }

    constructor(fname:string,lname:string,rollno:number){

        this.firstname=fname;
        this.lastname=lname;
        this.rollno=rollno;
    }

    display():void{
        console.log(`
        -----------Student Details------------
          First name:   ${this.firstname}
          Last Name:  ${this.lastname}
          Roll No:   ${this.rollno}
        `);
    }

    getName():string{
        return this.firstname;
    }
    setName(firstname:string):void{
        this.firstname=firstname;
    }


}

 export var astudent= new Student("Sumit","Raokhande",1);
    // astudent.display();
//     astudent.setName("Kiran");
//     console.log(astudent.getName());


export function add(a:number,b:number){
    return (a+b);
}


