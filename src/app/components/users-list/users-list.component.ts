import { Component, OnInit } from '@angular/core';
import { UsersState } from '../../store/reducers/users';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/reducers';
import { IUser } from '../../models';
import * as usersAction from '../../store/actions/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users$: Observable<IUser[]>;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.users$ = store.pipe(select(fromRoot.getUsers));
  }

  ngOnInit() {}

  selectUser(user: IUser) {
    this.store.dispatch(new usersAction.SelectUser(user));
  }

}
