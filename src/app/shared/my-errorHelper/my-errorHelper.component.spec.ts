/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyErrorHelperComponent } from './my-errorHelper.component';

describe('MyErrorHelperComponent', () => {
  let component: MyErrorHelperComponent;
  let fixture: ComponentFixture<MyErrorHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyErrorHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyErrorHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
