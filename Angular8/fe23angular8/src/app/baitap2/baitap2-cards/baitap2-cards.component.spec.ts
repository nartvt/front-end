import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2CardsComponent } from './baitap2-cards.component';

describe('Baitap2CardsComponent', () => {
  let component: Baitap2CardsComponent;
  let fixture: ComponentFixture<Baitap2CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2CardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
