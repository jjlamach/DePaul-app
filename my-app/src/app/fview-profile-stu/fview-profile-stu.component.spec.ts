import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FviewProfileStuComponent } from './fview-profile-stu.component';

describe('FviewProfileStuComponent', () => {
  let component: FviewProfileStuComponent;
  let fixture: ComponentFixture<FviewProfileStuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FviewProfileStuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FviewProfileStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
