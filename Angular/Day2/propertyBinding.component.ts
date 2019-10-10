import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-property',
    templateUrl: 'propertyBinding.component.html',
    styleUrls:['./propertyBinding.component.css']
})

export class PropertyBinding implements OnInit {
    
    name:string="Vishal Labade";
    imgurl:string="../assets/Desert.jpg";

    ishidden:boolean=false;

    isdisable:boolean=false;
    
    constructor() { }

    ngOnInit() { }
}