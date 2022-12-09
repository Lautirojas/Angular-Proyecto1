import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-errorHelper',
  templateUrl: './my-errorHelper.component.html',
  styleUrls: ['./my-errorHelper.component.css'],
})
export class MyErrorHelperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input()
  control: FormControl | undefined;
}
