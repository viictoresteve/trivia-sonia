import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestonComponent } from './queston.component';

describe('QuestonComponent', () => {
  let component: QuestonComponent;
  let fixture: ComponentFixture<QuestonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestonComponent]
    });
    fixture = TestBed.createComponent(QuestonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
