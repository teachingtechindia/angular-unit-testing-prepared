import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should starts with zero user', () => {
    expect(service.users.length).toBe(0);
  });

  it('should add new user', () => {
    service.addNewUser({ id: 1, name: 'John' });
    expect(service.users.length).toBe(1);
  });

  it('should add many user', () => {
    service.addNewUser({ id: 2, name: 'Tony' });
    service.addNewUser({ id: 3, name: 'Peter' });

    expect(service.users.length).toBe(2);
    expect(service.users).toContain({ id: 2, name: 'Tony' });
  });

  it('should remove user', () => {
    service.addNewUser({ id: 4, name: 'John' });
    service.addNewUser({ id: 5, name: 'Peter' });

    service.removeUser({ id: 4, name: 'John' });

    expect(service.users.length).toBe(1);
    expect(service.users).toContain({ id: 5, name: 'Peter' });
  });

  it('should clear users', () => {
    service.addNewUser({ id: 6, name: 'John' });
    service.addNewUser({ id: 7, name: 'Peter' });

    service.clearUsers();

    expect(service.users.length).toBe(0);
  });
});
