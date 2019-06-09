import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ContentContactComponent } from './baitap2-content-contact.component';

describe('Baitap2ContentContactComponent', () => {
  let component: Baitap2ContentContactComponent;
  let fixture: ComponentFixture<Baitap2ContentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ContentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ContentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
