import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { scoreboardReducer } from './scoreboard.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      scoreboard: scoreboardReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
