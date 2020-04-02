import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialServiceComponent } from './essential-service.component';

describe('EssentialServiceComponent', () => {
  let component: EssentialServiceComponent;
  let fixture: ComponentFixture<EssentialServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
