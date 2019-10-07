import {Empolyee} from './myinterface';
import {Department} from './Department';

export class EmpolyeeDetails implements Empolyee{
    firstname: string;   
     lastname: string;
    id: number;
    salary:number;
     DEPT:Department;


    getsalary():number{
        return this.salary;
    }

    setSalary(salary:number):void{
        this.salary=salary;
    }


    constructor(fname:string,lname:string,id:number,dept:Department){
            this.firstname=fname;
            this.lastname=lname;
            this.id=id;
            this.DEPT=dept;
    }

    getFirstname(): string {
       return this.firstname;
    }
    setFirstname(firstname: string): void {
        this.firstname=firstname;
    }
    display(): void {

        console.log(`
        -------Empolyee Details------------
        Emp Full Name ${this.firstname}  ${this.lastname}
        Emp Id Is ${this.id}
        Emp Salary is ${this.salary}
        Emp Department ${this.DEPT.getDept()}
        
        `);
       
    }

    
}