import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';
import { AppRoutingModule, AppComponent } from './index';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
