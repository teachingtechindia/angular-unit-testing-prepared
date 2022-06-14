import { Component, OnInit } from '@angular/core';
import { UserModel, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.addNewUser({ id: 1, name: 'John' });
    this.usersService.addNewUser({ id: 2, name: 'Vivek' });
    this.usersService.addNewUser({ id: 3, name: 'Krishna' });

    this.users = this.usersService.users;
  }

  onDelete(user: UserModel) {
    this.usersService.removeUser(user);
    this.users = this.usersService.users;
  }

  deleteAllUsers() {
    this.users = [];
  }
}
