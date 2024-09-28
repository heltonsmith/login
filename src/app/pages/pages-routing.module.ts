import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';
import { DocenteComponent } from './docente/docente.component';
import { AlumnoComponent } from './alumno/alumno.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'store', component: StoreComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent, canActivate: [redirectIfAuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [authGuard]},
  { path: 'docente', component: DocenteComponent, canActivate: [authGuard]},
  { path: 'alumno', component: AlumnoComponent, canActivate: [authGuard]},
  { path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
