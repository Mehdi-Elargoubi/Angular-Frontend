import { EmployeeService } from './../../../../employee.service';
import { Employee } from './../../../../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-employees',
  templateUrl: './liste-employees.component.html',
  styleUrls: ['./liste-employees.component.css']
})
export class ListeEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {

    this.getEmployees();


  //   this.employees=[{
  //     "id" : 1,
  //     "nom" : "ELARGOUBI",
  //     "prenom" : "ELMEHDI",
  //     "cin" : "BB3618",
  //     "tel" : "023222136" ,
  //     "email" : "xxx@gmail.com",
  //     "poste" : "etudiant",
  //     // "hiredate" : new Date("2000-11-20")
  //   },
  //   {
  //     "id" : 2,
  //     "nom" : "Chafik",
  //     "prenom" : "youssef",
  //     "cin" : "BJ73618",
  //     "tel" : "09336667136" ,
  //     "email" : "yyy@gmail.com",
  //     "poste" : "etudiant",
  //     // "hiredate" :
  //   },
  //   {
  //     "id" : 3,
  //     "nom" : "Chafik",
  //     "prenom" : "youssef",
  //     "cin" : "BJ73618",
  //     "tel" : "9336667136" ,
  //     "email" : "yyy@gmail.com",
  //     "poste" : "etudiant",
  //     // "hiredate" :
  //   }


  // ];
  }


  public getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => this.employees=data);
  }

}
