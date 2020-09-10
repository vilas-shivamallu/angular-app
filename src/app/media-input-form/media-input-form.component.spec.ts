import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaInputFormComponent } from './media-input-form.component';

describe('MediaInputFormComponent', () => {
  let component: MediaInputFormComponent;
  let fixture: ComponentFixture<MediaInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
