import { Component, OnInit } from '@angular/core';
import { DynControl } from '../../lib';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
})
export class MyInputComponent extends DynControl {

  constructor() {
    super();
  }

}
