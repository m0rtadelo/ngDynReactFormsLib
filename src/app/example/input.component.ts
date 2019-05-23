import { Component } from '@angular/core';
import { DynControl } from '../../lib';

@Component({
  selector: 'rfm-input',
  template: `
  <div *ngIf="visible" [formGroup]="this.model">{{title}}
    <input type="text"
      [formControlName]="name"
      [placeholder]="placeholder"
      [attr.readonly]="readOnly ? true : null"
    >
    <span *ngIf="required">*</span>
  </div>
  <div *ngIf="this.model.get(name).errors">
    {{ this.model.get(name).errors | json }}
  </div>
  `
})
export class InputComponent extends DynControl {
}
