import { OnInit, Input, Output, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { MyFormGroup } from './MyFormGroup';
import { MyFormControl } from './myFormControl';

export class DynControl implements OnInit {
  @Input() name: string; //         key
  @Input() title: string; //        label
  @Input() placeholder: string; //  hint
  @Input() model: MyFormGroup;
  @Input() readOnly = false;
  @Input() visible = true;
  @Input() maxLength: number;
  @Input() minLength: number;
  private _required = false;
  public input: ElementRef;
  protected validators = [];

  constructor() {}

  @Input() public set required(value: boolean ) {
    this._required = value;
    if (this.model && this.model.contains(this.name)) {
      this.setValidators();
      this.model.controls[this.name].setValidators(this.validators);
      this.model.controls[this.name].updateValueAndValidity();
    }
  }
  public get required(): boolean {
    return this._required;
  }

  ngOnInit() {
    this.configure();
  }

  public hasError() {
    return this.model.controls[this.name].errors !== null;
  }

  public getError() {
    return this.model.controls[this.name].errors;
  }

  private configure() {
    this.setValidators();
    this.createModel();
  }

  private setValidators() {
    this.validators = [];
    this.setValidatorRequired();
    this.setValidatorMaxLength();
    this.setValidatorMinLength();
  }

  private setValidatorMinLength() {
    if (!isNaN(this.minLength)) {
      this.validators.push(Validators.minLength(this.minLength));
    }
  }

  private setValidatorMaxLength() {
    if (!isNaN(this.maxLength)) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }
  }

  private setValidatorRequired() {
    if (this._required) {
      this.validators.push(Validators.required);
    }
  }

  public createModel() {
    if (this.model) {
      if (!this.model.contains(this.name)) {
        this.model.addControl(
          this.name,
          new MyFormControl(null, this.validators, null, this.input)
        );
      }
    }
  }
}
