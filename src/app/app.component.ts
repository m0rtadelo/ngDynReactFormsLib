import { Component, OnInit } from '@angular/core';

import { DynGroup } from '../lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DynGroup implements OnInit {
  title = 'NgDynReactFormsLib';

  showModel() {
    console.log(this.model);
  }

  loadModel() {
    const check = prompt('Enter S or N for check', 'S');
    this.model.patchValue({
      name: 'name',
      surname: 'maverick',
      hero: check,
      bad: 'N',
      boy: 'S'
    });
  }
}
