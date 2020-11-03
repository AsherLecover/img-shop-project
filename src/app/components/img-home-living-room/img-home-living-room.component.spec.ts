import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHomeLivingRoomComponent } from './img-home-living-room.component';

describe('ImgHomeLivingRoomComponent', () => {
  let component: ImgHomeLivingRoomComponent;
  let fixture: ComponentFixture<ImgHomeLivingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgHomeLivingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgHomeLivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
