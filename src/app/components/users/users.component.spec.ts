import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
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
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUsersService = beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      schemas: [NO_ERRORS_SCHEMA],
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
});
