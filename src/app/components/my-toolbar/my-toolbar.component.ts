import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css'],
})
export class MyToolbarComponent implements OnInit {
  public nombre: string = 'no soy un nombre';

  constructor() {}

  ngOnInit() {}
}
