import { Component, OnInit, ViewChild } from '@angular/core';
import { ListOfSongsComponent } from './listofsongs.component';

@Component({
    selector: 'app-realtime',
    templateUrl: 'Realtime.component.html',
    styleUrls : ['Realtime.component.css']
})

export class RealtimeComponent implements OnInit {

@ViewChild(ListOfSongsComponent) id:ListOfSongsComponent;

    constructor() { }

    ngOnInit() { }

    onFilter(id1){
   // console.log("In Home Component "+id1);
    
    this.id.oncolor(id1);

    }
}