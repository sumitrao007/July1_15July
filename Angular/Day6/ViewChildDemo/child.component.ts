import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: 'child.component.html',
    styleUrls: ['child.component.css']
})

export class ChildComponent implements OnInit {
   
    count:number=0;
    constructor() { }

    IncrementByOne(){
        this.count=this.count+1;
    }

    DecrementByOne(){
        this.count=this.count-1;
    }

    ngOnInit() { }
}