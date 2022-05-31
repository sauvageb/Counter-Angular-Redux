import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CounterComponent} from './components/counter/counter.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./state/counter.reducers";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
