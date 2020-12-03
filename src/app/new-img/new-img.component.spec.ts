import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImgComponent } from './new-img.component';

describe('NewImgComponent', () => {
  let component: NewImgComponent;
  let fixture: ComponentFixture<NewImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
