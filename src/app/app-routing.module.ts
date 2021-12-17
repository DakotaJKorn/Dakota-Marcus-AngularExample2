import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcusComponent } from './marcus/marcus.component';
import { DakotaComponent } from './dakota/dakota.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'marcus', component: MarcusComponent},
  {path: 'dakota', component: DakotaComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
