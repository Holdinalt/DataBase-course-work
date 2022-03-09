import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthorisationComponent} from "./authorisation/authorisation.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: AuthorisationComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
