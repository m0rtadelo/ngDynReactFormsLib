import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynModule } from '../lib';
import { MyInputComponent } from './my-input/my-input.component';
import { ExampleComponent } from './example/example.component';
import { InputComponent } from './example/input.component';


@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
    ExampleComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    DynModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
