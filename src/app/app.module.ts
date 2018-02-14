import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SidebarLeftComponent } from './shares/sidebar-left/sidebar-left.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarLeftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
