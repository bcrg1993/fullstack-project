import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceRemoveDialogComponent } from './commerce-remove-dialog.component';

describe('CommerceRemoveDialogComponent', () => {
  let component: CommerceRemoveDialogComponent;
  let fixture: ComponentFixture<CommerceRemoveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceRemoveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceRemoveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
