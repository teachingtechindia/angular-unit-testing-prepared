import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: 'users/:userId',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
