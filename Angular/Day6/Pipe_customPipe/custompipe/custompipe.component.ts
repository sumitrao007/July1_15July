import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  description:string="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, perspiciatis beatae illum esse distinctio enim porro magnam non quaerat hic alias, rem iure soluta molestias excepturi natus et inventore explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, perspiciatis beatae illum esse distinctio enim porro magnam non quaerat hic alias, rem iure soluta molestias excepturi natus et inventore explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, perspiciatis beatae illum esse distinctio enim porro magnam non quaerat hic alias, rem iure soluta molestias excepturi natus et inventore explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, perspiciatis beatae illum esse distinctio enim porro magnam non quaerat hic alias, rem iure soluta molestias excepturi natus et inventore explicabo.";
  constructor() { }

  ngOnInit() {
  }

}
