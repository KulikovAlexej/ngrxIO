import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IUser } from '../../models';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  user$: Observable<IUser>;

  constructor(
    private store: Store<any>
  ) {
    this.user$ = store.pipe(select(fromRoot.getSelectedUser));
  }

  ngOnInit() {
    this.user$.subscribe(user => console.log(user));
  }

}
