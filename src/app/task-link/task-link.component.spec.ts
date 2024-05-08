import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLinkComponent } from './task-link.component';

describe('TaskLinkComponent', () => {
  let component: TaskLinkComponent;
  let fixture: ComponentFixture<TaskLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
