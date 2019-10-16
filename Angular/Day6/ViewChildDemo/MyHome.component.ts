import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'app-home',
    templateUrl: 'MyHome.component.html',
    styleUrls: ['MyHome.component.css']
})

export class MyHomeComponent implements OnInit {
    
@ViewChild(ChildComponent) childview:ChildComponent;

message:string="";
    constructor() { }

    onIncrement(){
        this.message="U R in Parent Component";
        this.childview.IncrementByOne();
    }
    onDecrement(){
        this.childview.DecrementByOne();
    }

    ngOnInit() { }
}