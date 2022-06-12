import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user!: UserModel;
  @Output() delete = new EventEmitter<UserModel>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteCLick() {
    this.delete.next(this.user);
  }
}
