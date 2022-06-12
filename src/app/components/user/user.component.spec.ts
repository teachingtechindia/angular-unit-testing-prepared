import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

fdescribe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user input property', () => {
    component.user = { id: 100, name: 'Vivek' };
    fixture.detectChanges();
    expect(component.user).toEqual({ id: 100, name: 'Vivek' });
  });

  it('should render the user name', () => {
    component.user = { id: 100, name: 'Vivek' };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h4').textContent).toEqual(
      'Vivek'
    );
  });
});
