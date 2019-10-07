import {EmpolyeeDetails} from './EmpolyeeDetails';
import { Department } from './Department';

var aEmpoyee=new EmpolyeeDetails("Sumit","Raokhande",1,new Department("IT"));

aEmpoyee.setSalary(50000);
aEmpoyee.display();