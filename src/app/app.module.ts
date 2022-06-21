import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { RecrutementComponent } from './components/pages/employees/recrutement/recrutement.component';
import { ListeEmployeesComponent } from './components/pages/employees/liste-employees/liste-employees.component';
import { ProfileComponent } from './components/pages/employees/profile/profile.component';
import { DepartComponent } from './components/pages/employees/depart/depart.component';
import { AvertissementComponent } from './components/pages/employees/avertissement/avertissement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    RecrutementComponent,
    ListeEmployeesComponent,
    ProfileComponent,
    DepartComponent,
    AvertissementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
