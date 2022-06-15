import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserModel, UsersService } from 'src/app/services/users.service';

import { UsersComponent } from './users.component';

class MockUsersService {
  users: UserModel[] = [];

  constructor() {}

  addNewUser(user: UserModel) {
    this.users.push(user);
  }

  removeUser(user: UserModel) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

  clearUsers() {
    this.users = [];
  }
}

describe('UsersComponent', () => {
  @Component({
    selector: 'app-user',
    template: `<div></div>`,
  })
  class FakeUserComponent {
    @Input() user!: UserModel;
  }

  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUsersService = beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, FakeUserComponent],
      // schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, RouterModule],
      providers: [{ provide: UsersService, useClass: mockUsersService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have three users', () => {
    fixture.detectChanges();
    expect(component.users.length).toEqual(3);
  });

  it('should query all the 3 app-user element from DOM', () => {
    fixture.detectChanges();
    // console.log(fixture.debugElement.queryAll(By.css('app-user')));
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(3);
  });

  it('should query all the 3 app-user element from DOM - by using alternate approach', () => {
    fixture.detectChanges();
    // console.log(fixture.debugElement.queryAll(By.directive(UsersComponent)));
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(3);
  });

  it('should delete all users', () => {
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(3);

    fixture.debugElement.query(By.css('#delete-all-btn')).nativeElement.click();

    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(0);
  });

  it('should delete all users - Apporach II', () => {
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(3);

    fixture.debugElement
      .query(By.css('#delete-all-btn'))
      .triggerEventHandler('click', { stopPropagation: () => {} });

    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(0);
  });

  xit('should add a user to users array asynchronously', () => {
    expect(component.users.length).toEqual(3);
    component.addUserAsync();
    expect(component.users.length).toEqual(4);
  });

  xit('should add a user to users array asynchronously', () => {
    expect(component.users.length).toEqual(3);
    component.addUserAsync();
    setTimeout(() => {
      expect(component.users.length).toEqual(4);
    }, 2000);
  });

  xit('should add a user to users array asynchronously', (done) => {
    expect(component.users.length).toEqual(3);
    component.addUserAsync();
    setTimeout(() => {
      expect(component.users.length).toEqual(4);
      done();
    }, 2000);
  });

  it('should add a user to users array asynchronously', fakeAsync(() => {
    expect(component.users.length).toEqual(3);
    component.addUserAsync();
    // tick(2000);
    flush();
    expect(component.users.length).toEqual(4);
  }));
});
