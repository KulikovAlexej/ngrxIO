import { Component, OnInit } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ScoreboardState, IncrementHome, IncrementAway, Reset } from '../../../ngrx/scoreboard-page.actions';
import * as fromScoreboard from './../../../ngrx/scoreboard.reducer';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scoreboard$: Observable<ScoreboardState>;
  awayScore$: Observable<number>;

  constructor(
    private scoreboardStore: Store<ScoreboardState>
  ) {
    this.scoreboard$ = scoreboardStore.pipe(select('game'));
    // this.scoreboard$.subscribe
    // this.scoreboard$ = scoreboardStore.select(fromScoreboard.scoreboardReducer)
    // this.awayScore$ = scoreboardStore.select(fromScoreboard.getAway);
  }

  ngOnInit() {
    this.scoreboard$.subscribe(
      data => console.log(data)
    );
  }

  incrementHome() {
    // this.scoreboardStore.dispatch(new IncrementHome());
  }

  incrementAway() {
    // this.scoreboardStore.dispatch(new IncrementAway());
  }

  resetScore() {
    // this.scoreboardStore.dispatch(new Reset(
    //   {
    //     home: 0,
    //     away: 0
    //   }
    // ));
  }

}
