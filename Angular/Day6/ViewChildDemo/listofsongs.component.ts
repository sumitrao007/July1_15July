import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listofsongs',
    templateUrl: 'listofsongs.component.html',
    styleUrls : ['listofsongs.component.css']
})

export class ListOfSongsComponent implements OnInit {

    divcolor=['white','red','green','blue','pink','yellow','black'];

    arrindex:number=0;

    constructor() { }

    ngOnInit() { }

    oncolor(id_child){
      //  console.log("U r in List of Songs "+id_child);
        this.arrindex=id_child;
    }



}