import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}