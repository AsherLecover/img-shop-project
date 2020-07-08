import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicMainSubListComponent } from './pic-main-sub-list.component';

describe('PicMainSubListComponent', () => {
  let component: PicMainSubListComponent;
  let fixture: ComponentFixture<PicMainSubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicMainSubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicMainSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
