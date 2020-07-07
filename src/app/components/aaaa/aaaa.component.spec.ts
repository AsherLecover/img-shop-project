import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaaComponent } from './aaaa.component';

describe('AaaaComponent', () => {
  let component: AaaaComponent;
  let fixture: ComponentFixture<AaaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
