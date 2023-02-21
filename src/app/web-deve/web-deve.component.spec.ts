import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDeveComponent } from './web-deve.component';

describe('WebDeveComponent', () => {
  let component: WebDeveComponent;
  let fixture: ComponentFixture<WebDeveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDeveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
