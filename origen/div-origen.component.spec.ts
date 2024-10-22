import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivOrigenComponent } from './div-origen.component';

describe('DivOrigenComponent', () => {
  let component: DivOrigenComponent;
  let fixture: ComponentFixture<DivOrigenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivOrigenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivOrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
