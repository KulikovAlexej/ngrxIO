import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer, getHome } from '../../ngrx/scoreboard.reducer';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import * as fromScoreboard from '../../ngrx/scoreboard.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', fromScoreboard.commonReducers)
  ],
  declarations: [ScoreboardComponent],
  exports: [
    ScoreboardComponent
  ]
})
export class ScoreboardModule { }
