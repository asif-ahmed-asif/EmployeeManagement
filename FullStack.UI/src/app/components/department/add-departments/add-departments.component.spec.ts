import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentsComponent } from './add-departments.component';

describe('AddDepartmentsComponent', () => {
  let component: AddDepartmentsComponent;
  let fixture: ComponentFixture<AddDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDepartmentsComponent]
    });
    fixture = TestBed.createComponent(AddDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
