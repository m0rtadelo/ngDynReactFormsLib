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

}
