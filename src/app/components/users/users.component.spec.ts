import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersService } from 'src/app/services/users.service';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUsersService: UsersService;

  beforeEach(async () => {
    mockUsersService = jasmine.createSpyObj([
      'addNewUser',
      'removeUser',
      'clearUsers',
    ]);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    /*
      mockUsersService.addNewUser.and.returnValue(anything);
    */

    expect(component).toBeTruthy();
  });
});
