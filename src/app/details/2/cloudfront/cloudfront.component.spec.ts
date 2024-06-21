import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudfrontComponent } from './cloudfront.component';

describe('CloudfrontComponent', () => {
  let component: CloudfrontComponent;
  let fixture: ComponentFixture<CloudfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudfrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
