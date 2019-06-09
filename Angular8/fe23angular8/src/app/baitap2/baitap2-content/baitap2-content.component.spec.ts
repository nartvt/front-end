import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ContentComponent } from './baitap2-content.component';

describe('Baitap2ContentComponent', () => {
  let component: Baitap2ContentComponent;
  let fixture: ComponentFixture<Baitap2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
