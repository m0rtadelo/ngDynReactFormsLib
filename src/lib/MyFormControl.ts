import { FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { AbstractControlOptions } from '@angular/forms/src/model';
import { DynControl } from './dyn-control';

export class MyFormControl extends FormControl {
  public element: ElementRef;
  public control: DynControl;

  // tslint:disable-next-line:max-line-length
  constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null, formElement?: ElementRef, dynControl?:DynControl ) {
    super(formState, validatorOrOpts, asyncValidator);
    this.element = formElement;
    this.control = dynControl;
  }

  public focus() {
    console.log('no element defined to focus!');
    if (this.element) {
      this.element.nativeElement.focus();
    }
  }
}
