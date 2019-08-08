import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCheckComponent } from './my-check.component';

describe('MyCheckComponent', () => {
  let component: MyCheckComponent;
  let fixture: ComponentFixture<MyCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
