import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviewProfileStuComponent } from './aview-profile-stu.component';

describe('AviewProfileStuComponent', () => {
  let component: AviewProfileStuComponent;
  let fixture: ComponentFixture<AviewProfileStuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviewProfileStuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviewProfileStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
