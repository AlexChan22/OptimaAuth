import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { AppComponent } from './app.component';
import { authGuard } from 'src/Guards/dashboard-permit.guard';

const routes: Routes = [
	{path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: UsuarioLoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
