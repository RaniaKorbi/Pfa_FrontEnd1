import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCandidatureComponent } from './liste-candidature.component';

describe('ListeCandidatureComponent', () => {
  let component: ListeCandidatureComponent;
  let fixture: ComponentFixture<ListeCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
