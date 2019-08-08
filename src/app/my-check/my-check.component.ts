import { Component } from '@angular/core';
import { DynControl } from '../../lib';

@Component({
  selector: 'app-my-check',
  templateUrl: './my-check.component.html',
  styleUrls: ['./my-check.component.css']
})
export class MyCheckComponent extends DynControl {

  constructor() {
    super();
  }

  public fireChange(event) {
    this.model.get(this.name).setValue(
      event.currentTarget.checked ? 'S' : 'N'
    );
  }
}
