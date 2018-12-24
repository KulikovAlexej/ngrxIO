import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { MyCounterComponent } from './my-counter/my-counter.component';
// import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { counterReducer } from './ngrx/counter.reducer';
import { ScoreboardModule } from './modules/scoreboard/scoreboard.module';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    // ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: counterReducer,
      // scoreboard: scoreboardReducer
    }),
    ScoreboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
