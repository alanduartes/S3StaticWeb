import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudformationComponent } from './cloudformation.component';

describe('CloudformationComponent', () => {
  let component: CloudformationComponent;
  let fixture: ComponentFixture<CloudformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CloudformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
