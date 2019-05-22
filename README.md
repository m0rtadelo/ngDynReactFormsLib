# NgDynReactFormsLib

This project is a wrapper library of ReactiveForms (angular) for making fast Reactive Forms in angular.

The purpose of this library is to help build Reactive Forms faster. All the form definition are in the html template. The library will create the model and validators from the html template and helps you to build rich forms components.

---
Important: **WIP** **POC**
---
---

## Control example

```typescript
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
  `
})
export class InputComponent extends DynControl {
}
```

## Group example

```typescript
import { Component } from '@angular/core';
import { DynGroup } from '../../lib';

@Component({
  selector: 'rfm-dyngroup',
  template: `
    <form [formGroup]="model">
      <rfm-input
        name="name"
        [model]="model"
        title="Name:"
        [required]="true"
        placeholder="enter name"
        [maxLength]="18"
      ></rfm-input>
      <rfm-input
        name="surname"
        [model]="model"
        title="Surname:"
        [readOnly]="!!!this.model.get('name').value"
        placeholder="enter surname"
        [maxLength]="18"
      ></rfm-input>
    </form>
    <button (click)="this.showModel()">Show Model values</button>
  `
})
export class ExampleComponent extends DynGroup {
  showModel() {
    console.log(this.model);
  }
}
```

## Model bindings

* `model` the DynFormGroup to be used as model group
* `name` then name of the DynFormControl for the DynFormGroup

## Bult-in validators

* `required` sets the required validator of a field. Default false
* `minLength` sets the minLength validator of field. Default undefined (not set)
* `maxLength` sets the maxLength validator of a field. Default undefined (not set)

## Built-in view state

* `visible` sets the visible property of a element. Default true
* `readOnly` sets the readOnly property of a element. Default false
* `title` sets the title/Caption property of a element. Default undefined
* `placeholder` sets the placeholder property of a element. Default undefined

## DynFormGroup extras

* `hasError()` returns if the model has validations errors
* `getErrors()` returns the errors array (recursive)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
