import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.comopnent.html',
    styleUrls : ['sidebar.comopnent.css']
})

export class SideBarComponent implements OnInit {
    
    songsName=['Bollywood','Marathi','Punjabi','Bhohjpuri','Hollywood','Tamil'];

    @Output() childdata=new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onclick(id){
     //  console.log(id); 
       this.childdata.emit(id);
    }
}