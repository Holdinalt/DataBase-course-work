import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DashboardComponent} from "./dashboard.component";
import {HttpClientModule} from "@angular/common/http";
import {DefaultBladeComponent} from "./default-blade/default-blade.component";
import {HighBladeComponent} from "./high-blade/high-blade.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    DefaultBladeComponent,
    HighBladeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
