import { Component } from '@angular/core';
import { DynGroup } from '../../lib';

@Component({
  selector: 'rfm-dyngroup',
  template: `
    <form [formGroup]="model">
      <rfm-input
        name="name"
        title="Name:"
        [model]="model"
        [required]="true"
        placeholder="enter name"
        [min]="5"
        [maxLength]="18"
      ></rfm-input>
      <rfm-input
        name="surname"
        [model]="model"
        title="Surname:"
        [readOnly]="!!!this.model.get('name').value"
        placeholder="enter surname"
        [maxLength]="18"
        [email]="true"
        [expect]="1"
      ></rfm-input>
    </form>
    <button (click)="this.showModel()">Show Model values</button>
    <button (click)="this.showErrors()">Show Model errors</button>
  `
})
export class ExampleComponent extends DynGroup {

  showModel() {
    console.log(this.model);
  }

  showErrors() {
    console.log(this.model.getErrors());
  }

}
