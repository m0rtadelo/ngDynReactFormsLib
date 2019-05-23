import { OnInit, Input, Output, ElementRef, OnDestroy, EventEmitter } from '@angular/core';
import { Validators, ValidationErrors } from '@angular/forms';
import { MyFormGroup } from './MyFormGroup';
import { MyFormControl } from './myFormControl';
import { isRegExp } from 'util';
enum Expect {Number, Date}

export class DynControl implements OnInit {
  @Input() readonly name: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() model: MyFormGroup;
  @Input() readOnly = false;
  @Input() visible = true;

  // ** Angular Validators */
  private _required: boolean;
  private _min: number;
  private _max: number;
  private _maxLength: number;
  private _minLength: number;
  private _pattern: string | RegExp;
  private _email: boolean;
  private _requiredTrue: boolean;
  // Built-in Validators */
  private _expect: Expect;
  public input: ElementRef;
  protected validators = [];

  constructor() {}

  ngOnInit() {
    this.configure();
  }

  @Input() public set min(value: number) {
    this._min = value;
    this.updateValidators();
  }

  public get min(): number {
    return this._min;
  }

  @Input() public set max(value: number) {
    this._max = value;
    this.updateValidators();
  }

  public get max(): number {
    return this._max;
  }

  @Input() public set maxLength(value: number) {
    this._maxLength = value;
    this.updateValidators();
  }

  public get maxLength(): number {
    return this._maxLength;
  }

  @Input() public set minLength(value: number) {
    this._minLength = value;
    this.updateValidators();
  }

  public get minLength(): number {
    return this._minLength;
  }

  @Input() public set required(value: boolean ) {
    this._required = value;
    this.updateValidators();
  }

  public get required(): boolean {
    // this.model.get(this.name).validator.
    return this._required;
  }

  @Input() public set pattern(value: string | RegExp ) {
    this._pattern = value;
    this.updateValidators();
  }

  public get pattern(): string | RegExp {
    return this._pattern;
  }

  @Input() public set expect(value: Expect ) {
    this._expect = value;
    this.updateValidators();
  }

  public get expect(): Expect {
    return this._expect;
  }

  @Input() public set email(value: boolean ) {
    this._email = value;
    this.updateValidators();
  }

  public get email(): boolean {
    return this._email;
  }

  @Input() public set requiredTrue(value: boolean ) {
    this._requiredTrue = value;
    this.updateValidators();
  }

  public get requiredTrue(): boolean {
    return this._requiredTrue;
  }

  public hasError(): boolean {
    return this.model.controls[this.name].errors !== null;
  }

  public getError(): ValidationErrors {
    return this.model.controls[this.name].errors;
  }

  private configure(): void {
    this.setValidators();
    this.createModel();
  }

  private updateValidators(): void {
    if (this.model && this.model.contains(this.name)) {
      this.setValidators();
      this.model.controls[this.name].setValidators(this.validators);
      this.model.controls[this.name].updateValueAndValidity();
    }
  }

  private setValidators(): void {
    this.validators = [];
    this.setValidatorRequired();
    this.setValidatorMaxLength();
    this.setValidatorMinLength();
    this.setValidatorMin();
    this.setValidatorMax();
    this.setValidatorPattern();
    this.setValidatorEmail();
    this.setValidatorRequiredTrue();
    this.setValidatorExpect();
  }

  private setValidatorExpect(): void {
    if (!isNaN(this._expect)) {
      if (this._expect === Expect.Number) {
        this.validators.push(this.validateNumber);
      }
      if (this._expect === Expect.Date) {
        this.validators.push(this.validateDate);
      }
    }
  }

  private validateNumber(c: MyFormControl) {
    return !isNaN(c.value) ? null : {expect: { number: true}};
  }

  private validateDate(c: MyFormControl) {
    return Date.parse(c.value) ? null : {expect: { date: true}};
  }

  private setValidatorMinLength(): void {
    if (!isNaN(this.minLength)) {
      this.validators.push(Validators.minLength(this.minLength));
    }
  }

  private setValidatorMaxLength(): void {
    if (!isNaN(this.maxLength)) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }
  }

  private setValidatorMin(): void {
    if(!isNaN(this.min)) {
      this.validators.push(Validators.min(this.min));
    }
  }

  private setValidatorMax(): void {
    if(!isNaN(this.max)) {
      this.validators.push(Validators.max(this.max));
    }
  }

  private setValidatorRequired(): void {
    if (this._required) {
      this.validators.push(Validators.required);
    }
  }

  private setValidatorPattern(): void {
    if (isRegExp(this._pattern)) {
      this.validators.push(Validators.pattern(this._pattern));
    }
  }

  private setValidatorEmail(): void {
    if (this.email) {
      this.validators.push(Validators.email);
    }
  }

  private setValidatorRequiredTrue(): void {
    if (this._requiredTrue) {
      this.validators.push(Validators.requiredTrue);
    }
  }

  public createModel(): void {
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
