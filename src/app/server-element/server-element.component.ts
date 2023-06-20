import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, shadowDOM
})
export class ServerElementComponent {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor(){

  }
}