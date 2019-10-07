import {MyAbstract} from './MyAbstract';

export class ChildClass extends MyAbstract{

    add(a: number, b: number): number {
        return (a+b);
    }
    
}