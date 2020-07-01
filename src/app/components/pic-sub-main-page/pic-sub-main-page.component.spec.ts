import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicSubMainPageComponent } from './pic-sub-main-page.component';

describe('PicSubMainPageComponent', () => {
  let component: PicSubMainPageComponent;
  let fixture: ComponentFixture<PicSubMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicSubMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicSubMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
