import { Component, OnInit } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ScoreboardState, IncrementHome, IncrementAway, Reset } from '../../../ngrx/scoreboard-page.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scoreboard$: Observable<ScoreboardState>;

  constructor(
    private scoreboardStore: Store<ScoreboardState>
  ) {
    this.scoreboard$ = scoreboardStore.pipe(select('game'));
  }

  ngOnInit() {
    console.log('hello');
    this.scoreboard$.subscribe(
      data => console.log(data)
    );
  }

  incrementHome() {
    this.scoreboardStore.dispatch(new IncrementHome());
  }

  incrementAway() {
    this.scoreboardStore.dispatch(new IncrementAway());
  }

  resetScore() {
    this.scoreboardStore.dispatch(new Reset(
      {
        home: 0,
        away: 0
      }
    ));
  }

}
