import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGuidelineComponent } from './logo-guideline.component';

describe('LogoGuidelineComponent', () => {
  let component: LogoGuidelineComponent;
  let fixture: ComponentFixture<LogoGuidelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoGuidelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
