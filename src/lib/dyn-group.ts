import { OnInit } from '@angular/core';
import { MyFormGroup } from './MyFormGroup';

export class DynGroup implements OnInit {
  public model: MyFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.model = new MyFormGroup({});
  }
}
