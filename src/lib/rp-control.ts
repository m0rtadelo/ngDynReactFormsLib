import { Input } from '@angular/core';
import { DynControl } from './dyn-control';

export enum DataType {
  date = 'F',
  dateTime = 'FH',
  time = 'H',
  numeric = 'N',
  decimal = 'ND',
  email = 'E',
  url = 'U',
}

export class RpControl extends DynControl {
  @Input() _dataType: DataType;

  constructor() {
    super();
  }

  @Input() public set dataType(value: DataType) {
    this._dataType = value;

  }

  public get dataType(): DataType {
    return this._dataType;
  }
}
