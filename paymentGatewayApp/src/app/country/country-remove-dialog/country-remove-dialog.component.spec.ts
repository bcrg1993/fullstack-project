import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRemoveDialogComponent } from './country-remove-dialog.component';

describe('CountryRemoveDialogComponent', () => {
  let component: CountryRemoveDialogComponent;
  let fixture: ComponentFixture<CountryRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
