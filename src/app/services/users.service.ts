import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserModel {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: UserModel[] = [];

  constructor(private httpClient: HttpClient) {}

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
