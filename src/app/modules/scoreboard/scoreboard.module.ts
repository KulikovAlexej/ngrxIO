import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from '../../ngrx/scoreboard.reducer';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('game', scoreboardReducer)
  ],
  declarations: [ScoreboardComponent],
  exports: [
    ScoreboardComponent
  ]
})
export class ScoreboardModule { }
