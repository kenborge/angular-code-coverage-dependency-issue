import { TestBed } from '@angular/core/testing';
import { ChildComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ChildComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
