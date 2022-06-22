import { Router } from '@angular/router';
import { EmployeeService } from './../../../../employee.service';
import { Employee } from './../../../../employee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-liste-employees',
  templateUrl: './liste-employees.component.html',
  styleUrls: ['./liste-employees.component.css']
})
export class ListeEmployeesComponent implements OnInit {

  employees: Employee[] = [];
  editeEmployee?: Employee;

  constructor(private employeeService : EmployeeService, private router : Router) { }

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

  public searchCollaborateurs(key: string): void {
    console.log(key);
    const results: Employee[] = [];
    for (const c of this.employees) {
      if (
        c.nom?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || c.cin?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || c.prenom?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        // || c.poste?.toLowerCase().indexOf(key.toLowerCase()) !== -1
        )
        {
        results.push(c);
      }
    }
    this.employees = results;
    if (!key) {
        this.getEmployees();
    }
  }

  //edit

  // public onOpenModal( colaborateur : Employee , mode : string ): void {

  //   const container = document.getElementById('main-container');
  //     const button = document.createElement('button');
  //     button.type = 'button';
  //     button.style.display = 'none';
  //     button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'edit') {
  //     this.editeEmployee=colaborateur ;
  //     button.setAttribute('data-target', '#updateEmployeeModal');
  //   }
  //   if (mode === 'delete') {
  //     this.deleteEmployee = colaborateur ;
  //     button.setAttribute('data-target', '#deleteEmployeeModal');
  //   }

  //   // @ts-ignore
  //   container.appendChild(button)
  //   button.click();
  // }

  // public onUpdateCollaborateur(employee: Employee): void {
  //   this.employeeService.UpdateEmployee(id,employee).subscribe(
  //     (response: Employee) => {
  //       console.log(response);
  //       this.getEmployees();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }




  public updateEmployee(id:number){
    this.router.navigate(['/update/'+id]);
  }


  public deleteEmployee(id:number, employee:Employee){
    this.employeeService.deleteEmployeeById(id, employee).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err)
      }
    });

  }






}
