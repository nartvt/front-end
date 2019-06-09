import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ContentWhatWeDoComponent } from './baitap2-content-what-we-do.component';

describe('Baitap2ContentWhatWeDoComponent', () => {
  let component: Baitap2ContentWhatWeDoComponent;
  let fixture: ComponentFixture<Baitap2ContentWhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ContentWhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ContentWhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
