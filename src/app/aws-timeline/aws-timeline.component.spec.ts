import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsTimelineComponent } from './aws-timeline.component';

describe('AwsTimelineComponent', () => {
  let component: AwsTimelineComponent;
  let fixture: ComponentFixture<AwsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwsTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
