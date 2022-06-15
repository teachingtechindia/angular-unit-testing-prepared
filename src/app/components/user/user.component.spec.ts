import { Directive, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserComponent } from './user.component';

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' },
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent, RouterLinkDirectiveStub],
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

    expect(
      fixture.debugElement.query(By.css('h4')).nativeElement.textContent
    ).toContain('Vivek');
  });

  it('should have a link to the user details', () => {
    component.user = { id: 100, name: 'Vivek' };
    fixture.detectChanges();
    const routerLink = fixture.debugElement
      .query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    expect(routerLink).toBeTruthy();
    expect(routerLink.linkParams).toEqual(['/users', 100]);
  });
});
