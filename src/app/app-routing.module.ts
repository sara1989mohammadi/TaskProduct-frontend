import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes = [
  {path: 'firstpage', component : FirstPageComponent},
  {path: '', redirectTo: 'firstpage', pathMatch: 'full'},
  {path: 'secondpage', component: SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
