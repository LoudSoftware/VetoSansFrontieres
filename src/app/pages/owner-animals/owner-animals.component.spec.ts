import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAnimalsComponent } from './owner-animals.component';

describe('OwnerAnimalsComponent', () => {
  let component: OwnerAnimalsComponent;
  let fixture: ComponentFixture<OwnerAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
