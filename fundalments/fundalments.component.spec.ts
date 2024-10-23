import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundalmentsComponent } from './fundalments.component';

describe('FundalmentsComponent', () => {
  let component: FundalmentsComponent;
  let fixture: ComponentFixture<FundalmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundalmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundalmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
