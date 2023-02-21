import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCodeComponent } from './no-code.component';

describe('NoCodeComponent', () => {
  let component: NoCodeComponent;
  let fixture: ComponentFixture<NoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
