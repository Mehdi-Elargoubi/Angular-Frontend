import { AvertissementComponent } from './components/pages/employees/avertissement/avertissement.component';
import { DepartComponent } from './components/pages/employees/depart/depart.component';
import { RecrutementComponent } from './components/pages/employees/recrutement/recrutement.component';
import { ListeEmployeesComponent } from './components/pages/employees/liste-employees/liste-employees.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'listeEmployees',component:ListeEmployeesComponent},
  {path:'recrutement',component:RecrutementComponent},
  {path:'depart',component:DepartComponent},
  {path:'avertissement',component:AvertissementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
