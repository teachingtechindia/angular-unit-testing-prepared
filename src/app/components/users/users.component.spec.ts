import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

fdescribe('UsersComponent', () => {
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
      imports: [HttpClientModule],
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
    console.log(fixture.debugElement.queryAll(By.css('app-user')));
    expect(fixture.debugElement.queryAll(By.css('app-user')).length).toEqual(3);
  });
});
