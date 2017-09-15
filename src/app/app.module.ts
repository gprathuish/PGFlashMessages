import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from './flash-messages/flash-messages.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
