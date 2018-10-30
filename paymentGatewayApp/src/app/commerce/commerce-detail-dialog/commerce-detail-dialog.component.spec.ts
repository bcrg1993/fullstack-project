import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceDetailDialogComponent } from './commerce-detail-dialog.component';

describe('CommerceDetailDialogComponent', () => {
  let component: CommerceDetailDialogComponent;
  let fixture: ComponentFixture<CommerceDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
