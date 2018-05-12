import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviewProfileFacComponent } from './aview-profile-fac.component';

describe('AviewProfileFacComponent', () => {
  let component: AviewProfileFacComponent;
  let fixture: ComponentFixture<AviewProfileFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviewProfileFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviewProfileFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
