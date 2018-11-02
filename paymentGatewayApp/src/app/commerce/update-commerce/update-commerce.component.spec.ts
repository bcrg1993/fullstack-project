import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommerceComponent } from './update-commerce.component';

describe('UpdateCommerceComponent', () => {
  let component: UpdateCommerceComponent;
  let fixture: ComponentFixture<UpdateCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
