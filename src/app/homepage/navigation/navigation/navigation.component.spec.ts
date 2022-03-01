import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatioComponent } from './navigation.component';

describe('NavigatioComponent', () => {
  let component: NavigatioComponent;
  let fixture: ComponentFixture<NavigatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
