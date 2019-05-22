import { Component, OnInit } from '@angular/core';
import { DynGroup } from '../../lib';
import { MyFormGroup } from '../../lib/MyFormGroup';

@Component({
  selector: 'rfm-dyngroup',
  template: `
    <form [formGroup]="formData">
      <rfm-input
        name="name"
        title="Name:"
        [model]="formData"
        [required]="true"
        placeholder="enter name"
        [maxLength]="18"
      ></rfm-input>
      <rfm-input
        name="surname"
        [model]="formData"
        title="Surname:"
        [readOnly]="!!!this.formData.get('name').value"
        placeholder="enter surname"
        [maxLength]="18"
      ></rfm-input>
    </form>
    <button (click)="this.showModel()">Show Model values</button>
  `
})
export class ExampleComponent extends DynGroup implements OnInit {
  formData: MyFormGroup;
  showModel() {
    console.log(this.formData);
  }

  ngOnInit(): void {
    this.formData = new MyFormGroup({});
  }
}
