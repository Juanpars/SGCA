import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovedaComponent } from './boveda.component';

describe('BovedaComponent', () => {
  let component: BovedaComponent;
  let fixture: ComponentFixture<BovedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BovedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BovedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
