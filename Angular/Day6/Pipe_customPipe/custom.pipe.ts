import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    transform(value: any, lowerlimit?:number,upperlimit?:number) {
        
        if(!value){
            return null;
        }


        let temp = (<string> value);
        
        let Actuallowerlimit=(lowerlimit)?lowerlimit:0;
        let Actuaclupperliimt=(upperlimit)?upperlimit:50;
        
      //  return  (temp.substring(0,50)+" ...");
      //return  (temp.substring(lowerlimit,upperlimit)+" ...");
      return  (temp.substring(Actuallowerlimit,Actuaclupperliimt)+" ...");

    }
}