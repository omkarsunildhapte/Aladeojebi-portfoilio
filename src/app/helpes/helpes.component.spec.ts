import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpesComponent } from './helpes.component';

describe('HelpesComponent', () => {
  let component: HelpesComponent;
  let fixture: ComponentFixture<HelpesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpesComponent]
    });
    fixture = TestBed.createComponent(HelpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
