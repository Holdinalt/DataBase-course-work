import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AuthorisationComponent} from "./authorisation.component";
import {AuthorisationService} from "./authorisation.service";
import {UserHandlerService} from "../user-handler.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [AuthorisationComponent],
  exports: [
    AuthorisationComponent,
  ],
  providers: [
    AuthorisationService,
    UserHandlerService
  ]
})

export class AuthorisationModule {}
